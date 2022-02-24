import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Usuario from '../interfaces/usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistracion: FormGroup = new FormGroup({});

  public usuario: Usuario = {
    name: '',
    lastName: '',
    password: '',
    passwordRepeat: '',
    birthday: '1995-12-14',
    email: '',
  }

  constructor() { }

  agregarUsuario(){
    console.log("hola",this.usuario.birthday);
  }

  ngOnInit() {
    let dateToday = new Date()
    this.usuario.birthday = String(dateToday.getFullYear() + '-' + String(dateToday.getMonth() + 1).padStart(2, '0') + '-' + dateToday.getDate()).padStart(2, '0');

    this.formRegistracion = new FormGroup({
      name: new FormControl('',[
        Validators.required,
      ]),
      lastName: new FormControl('',[
        Validators.required,
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]*$")
      ]),
      passwordRepeat: new FormControl('',[
        Validators.required,
        // Validators.
      ]),
    });
  }

}
