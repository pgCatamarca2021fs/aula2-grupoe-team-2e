import { Component, OnInit } from '@angular/core';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { CacheService } from '../services/cache.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private cacheService: CacheService ) { }

  faCat = faCat;

  ngOnInit(): void {
  }

}
