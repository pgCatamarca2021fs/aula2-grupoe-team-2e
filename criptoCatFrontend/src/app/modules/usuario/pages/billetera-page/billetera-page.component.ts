import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/shared/services/cache.service';
@Component({
  selector: 'app-billetera-page',
  templateUrl: './billetera-page.component.html',
  styleUrls: ['./billetera-page.component.css']
})
export class BilleteraPageComponent implements OnInit {

  constructor(private cacheService:CacheService) { }
  pesosaldoarg:number =0;
  ngOnInit(): void {
    this.pesosaldoarg= this.cacheService.usuarioCache.cuenta[0].billeteras[0].monto_dinero;
  }

}
