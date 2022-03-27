import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CacheService } from 'src/app/shared/services/cache.service';
import { UsuarioCache } from 'src/app/shared/interfaces/usuarioCache.interface';


interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  last_updated:string;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent{
  coins: Coin[] = []
  coins1: Coin[] = []
  coins2: Coin[] = []
  coins3: Coin[] = []
  constructor(private http: HttpClient, private cacheService: CacheService) { }
  usuario: any|UsuarioCache='';
  ngOnInit(){
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cmonero%2Ctether%2Cbinancecoin%2Cusd-coin%2Ccardano%2Cdogecoin%2Cbitcoin-cash&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe(
      (res)=> {

        this.coins = res
        this.coins1 =this.coins.slice(0,3);
        ;
        this.coins2 =this.coins.slice(3,6);

        this.coins3 =this.coins.slice(6,9);


      },
    (err) => console.log(err));
    this.usuario=this.cacheService.usuarioCache.nombre;

  }

}
