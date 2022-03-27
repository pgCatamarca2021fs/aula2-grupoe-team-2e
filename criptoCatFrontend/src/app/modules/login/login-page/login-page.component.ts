import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioCache } from 'src/app/shared/interfaces/usuarioCache.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CacheService } from 'src/app/shared/services/cache.service';
import { NombreServiceService } from 'src/app/shared/services/nombreService.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});

  errorSession : Boolean = false;

  constructor( 
    private authService: AuthService, 
    private router:Router,
    private cacheService: CacheService,
    private nombreServiceService: NombreServiceService 
  ) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[
          Validators.required,
          Validators.email,
        ]),
        contrasena: new FormControl('',[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]),
      }
    );

  }

  enviarLogin():void{
    const { email , contrasena } = this.formLogin.value;
    this.authService.enviarCredenciales( email , contrasena )
      .subscribe( (response: UsuarioCache) => { //cuando el usuario ingresa credenciales correctas✔✔✔
        //TODO: 200 >= x < 400
        if (response == null || response == undefined) {
          this.errorSession = true;
          return;
        }
        
        this.errorSession = false;
        console.log("Sesión iniciada correcta",response);

        this.cacheService.set("usuario",response);
        let usuario: UsuarioCache | null = this.cacheService.getDevolver('usuario');
        this.nombreServiceService.Nombre$.emit(usuario?.nombre);
        this.router.navigate(['/usuario/inicio']); 

      })
  }

}
