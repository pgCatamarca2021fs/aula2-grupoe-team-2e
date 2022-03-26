import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/shared/services/cache.service';


@Component({
  selector: 'app-depositar-page',
  templateUrl: './depositar-page.component.html',
  styleUrls: ['./depositar-page.component.css']
})
export class DepositarPageComponent implements OnInit {

  constructor(private cacheService: CacheService) { }
  pesosSaldoArgs: number = 0;

  ngOnInit() {
    this.pesosSaldoArgs = this.cacheService.usuarioCache.cuenta[0].billeteras[0].monto_dinero;
  }


}
