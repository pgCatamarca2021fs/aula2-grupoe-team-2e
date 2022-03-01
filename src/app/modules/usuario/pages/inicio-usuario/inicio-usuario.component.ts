import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Coin from '../../interfaces/interfaceCoin';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})

export class InicioUsuarioComponent implements OnInit {

  coins: Coin[] = [];
  coins1: Coin[] = [];
  coins2: Coin[] = [];
  coins3: Coin[] = [];

  constructor(private http: HttpClient) { }
  
  ngOnInit(){
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cmonero%2Ctether%2Cbinancecoin%2Cusd-coin%2Ccardano%2Cdogecoin%2Cbitcoin-cash&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe( 
      (res)=> {
        this.coins = res;
        this.coins1 =this.coins.slice(0,3);
        this.coins2 =this.coins.slice(3,6);
        this.coins3 =this.coins.slice(6,9);
      }, 
    (err) => console.log(err));
  };
}
