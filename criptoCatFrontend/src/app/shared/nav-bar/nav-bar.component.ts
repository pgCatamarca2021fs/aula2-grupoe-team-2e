import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { CacheService } from '../services/cache.service';
import { NombreServiceService } from '../services/nombreService.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private cacheService: CacheService, private router: Router, private nombresrvice:NombreServiceService ) {}
  nombre: string='';
  faCat = faCat;
  cerrarSesion(){
    this.cacheService.quit('usuario');
    this.router.navigate(['/login']);
    this.nombre='';
  }
  ngOnInit(): void {
    this.cacheService.get('usuario');
    this.nombre = this.cacheService.usuarioCache.nombre;
    
    this.nombresrvice.Nombre$.subscribe(texto =>{
      this.cacheService.get('usuario');
      this.nombre = this.cacheService.usuarioCache.nombre;
    })
  }

}
