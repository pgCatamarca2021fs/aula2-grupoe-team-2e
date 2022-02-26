import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiDatosDeCryptosService } from '../services/apiDatosDeCryptos.service';
import Coin from '../interfaces/interfaceCoin';




@Component({
  selector: 'app-precioCrypto',
  templateUrl: './precioCrypto.component.html',
  styleUrls: ['./precioCrypto.component.css']
})
export class PrecioCryptoComponent implements OnInit {
  coins: Coin[] = []
  filtro: Coin[] = []
  buscarTexto: string = '';
 
  constructor( private apiDatosDeCryptosServices:ApiDatosDeCryptosService) { }

  buscarCrypto(){
    this.filtro = 
    this.coins.filter(coin => coin.name.toLowerCase().includes(this.buscarTexto.toLowerCase())) &&
    this.coins.filter(coin => coin.symbol.toLowerCase().includes(this.buscarTexto.toLowerCase()));
    if (this.filtro.length == 0) {
      this.filtro[0]={     
        name:'No se encontro nada', 
        symbol:'', 
        image:'../../assets/dashboard/404-gato.png',
        current_price: 404, 
        price_change_percentage_24h:404, 
        last_updated:'404',
      } 
    }
  }

  ngOnInit(){
    this.apiDatosDeCryptosServices.datosCrypto()
      .subscribe( response => {
        this.coins = response;
        this.filtro = response;
      });
  }
  
}
