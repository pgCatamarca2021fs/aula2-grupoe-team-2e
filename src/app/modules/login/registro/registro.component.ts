import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Usuario from '../interfaces/usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public dateToday!: string
  formRegistracion: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  agregarUsuario(){
    console.log("hola",this.formRegistracion.value);  
  }

  ngOnInit() {
    const date: Date = new Date
    this.dateToday = String(date.getFullYear() + '-' + 
      String(date.getMonth() + 1).padStart(2, '0') + '-' + 
      date.getDate()).padStart(2, '0');

    this.formRegistracion = this.formBuilder.group({
      name: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[^0-9]*$") //no numeros
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("^[^0-9]*$")
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ]),
      passwordRepeat: new FormControl('',[
        Validators.required,
        this.controlValuesAreEqual('password','passwordRepeat')
      ]),
      birthday: new FormControl(this.dateToday,[
        Validators.required
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

}
