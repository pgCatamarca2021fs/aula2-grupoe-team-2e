import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public dateToday!: string
  formRegistracion: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const date: Date = new Date
    this.dateToday = String(date.getFullYear() + '-' + 
      String(date.getMonth() + 1).padStart(2, '0') + '-' + 
      String(date.getDate()).padStart(2, '0'));

    //Validaciones
    this.formRegistracion = this.formBuilder.group({
      name: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[A-Za-z]*$") //no numeros
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[A-Za-z]*$")
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ]),
      passwordRepeat: new FormControl('',[
        Validators.required,
        this.controlValuesAreEqual('password', 'passwordRepeat')
      ]),
      birthday: new FormControl(this.dateToday,[
        Validators.required,
        this.isYoung()

      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      dni: new FormControl('',[
        Validators.required,
        Validators.min(9999999),
      ])
    });
  }

  
  public get name() : AbstractControl | null {return this.formRegistracion.get('name');}
  public get lastName() : AbstractControl | null {return this.formRegistracion.get('lastName');}
  public get password() : AbstractControl | null {return this.formRegistracion.get('password');}
  public get passwordRepeat() : AbstractControl | null {return this.formRegistracion.get('passwordRepeat');}
  public get birthday() : AbstractControl | null {return this.formRegistracion.get('birthday');}
  public get email() : AbstractControl | null {return this.formRegistracion.get('email');}
  public get dni() : AbstractControl | null {return this.formRegistracion.get('dni');}
  

  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn {
    return (): ValidationErrors | null => {
      // const formGroup = control as FormGroup;
      const valueOfControlA = this.formRegistracion.get(controlNameA)?.value;
      const valueOfControlB = this.formRegistracion.get(controlNameB)?.value;
      // console.log('a: ',valueOfControlA,'b: ',valueOfControlB)

      if (valueOfControlA === valueOfControlB) {
        return null
      } else {
        return { valuesDoNotMatch: true }
      };
    };
  };

  private isYoung (): ValidatorFn{
    return(): ValidationErrors | null => {
      const fechaCruda:string | undefined = this.formRegistracion.get('birthday')?.value;
      const cumpleanosUsuario:Date = new Date(fechaCruda!);
      cumpleanosUsuario.setDate( cumpleanosUsuario.getDate() + 1 );

      const hoydia:Date = new Date();

      let edadUsuario = Math.abs(cumpleanosUsuario.getTime() - hoydia.getTime());
      edadUsuario = Math.round(edadUsuario/(1000 * 3600 * 24 * 365));

      if ( edadUsuario >= 18 ) {
          return null;
      }
      return { valuesIsYoung: true }
    }
  }

  agregarUsuario(){
    if (this.formRegistracion.invalid) {
      return
    }
    console.log("Datos enviados",this.formRegistracion.value);
  }

}
