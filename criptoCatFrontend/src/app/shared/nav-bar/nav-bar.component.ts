import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { UsuarioCache } from '../interfaces/usuarioCache.interface';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private cacheService: CacheService, private router: Router ) {}
   Nombre: string='';
   usuario: any|UsuarioCache='';
  faCat = faCat;
  cerrarSesion(){
    this.cacheService.quit('usuario');
    this.router.navigate(['/login']);
    this.Nombre='';
  }
  ngOnInit(): void {
    this.usuario=this.cacheService.get('usuario');
    this.Nombre = this.usuario.nombre;
  }

}
