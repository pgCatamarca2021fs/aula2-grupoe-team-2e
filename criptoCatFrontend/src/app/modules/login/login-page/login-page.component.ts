import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioApiService } from 'src/app/shared/services/usuario-api.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  errorSession : Boolean = false;

  constructor( private usuarioApiService: UsuarioApiService,
    private router:Router) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]),
      }
    );

  }

  enviarLogin():void{
    const { email , password } = this.formLogin.value;
    this.usuarioApiService.enviarCredenciales( email , password )
      .subscribe(response => { //cuando el usuario ingresa credenciales correctas✔✔✔
        //TODO: 200 >= x < 400

        const {tokenSession} = response;
        this.errorSession = false;
        console.log("Sesión iniciada correcta",response);

        // this.cookie.set("token",tokenSession,3,"/"); //el nombre del token, el token, la duracion y direccion a funcionar(/raiz)

        // this.router.navigate(['/login/registro']); //navega hacia login

      }, err =>{
        //TODO: 400 >= x
        this.errorSession = true;
        console.log("Sesión iniciada incorrecta",err.error);
      })
    // console.log('🐄🐮🐄',dataLogin);
  }

}
