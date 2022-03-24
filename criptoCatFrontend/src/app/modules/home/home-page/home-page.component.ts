import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { UsuarioApiService } from 'src/app/shared/services/usuario-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private usuarioApi: UsuarioApiService) { }

  ngOnInit(): void { }

}
