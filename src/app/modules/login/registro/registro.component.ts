import { Component, OnInit } from '@angular/core';
import Usuario from '../interfaces/usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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
    console.log("hola",this.usuario.birthday)
  }

  ngOnInit() {
    let dateToday = new Date()
    this.usuario.birthday = String(dateToday.getFullYear() + '-' + String(dateToday.getMonth() + 1).padStart(2, '0') + '-' + dateToday.getDate()).padStart(2, '0');
  }

}
