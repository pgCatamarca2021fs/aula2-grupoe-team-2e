import { Component, OnInit } from '@angular/core';
import { ApiDatosDeCryptosService } from '../../services/apiDatosDeCryptos.service';
import Coin from '../../interfaces/interfaceCoin';
import FormCompra from '../../interfaces/interfaceCompra';
import { CacheService } from 'src/app/shared/services/cache.service';


@Component({
  selector: 'app-compra-page',
  templateUrl: './compra-page.component.html',
  styleUrls: ['./compra-page.component.css']
})
export class CompraPageComponent implements OnInit {

  usuarioCompra: FormCompra = {
    coinSelected: '',
    cantidadPesos : 0,
    cantidadCripto : 0,
  }
  
  coins1: Coin[] = []

  convertionCrypto(){
    console.log(this.usuarioCompra.coinSelected?.current_price) //valor en dolar
    this.usuarioCompra.cantidadCripto = this.usuarioCompra.cantidadPesos/108,56; // se pasa de peso a dolar
    this.usuarioCompra.cantidadCripto =  this.usuarioCompra.cantidadCripto / this.usuarioCompra.coinSelected?.current_price;
  }

  isDefined = () => {
    const defined: boolean = Boolean(this.usuarioCompra.coinSelected);
    return defined;
  }

  constructor( private apiDatosDeCryptosServices:ApiDatosDeCryptosService, private cacheService: CacheService) { }
  ngOnInit(){
    
    console.log(this.isDefined());
    this.apiDatosDeCryptosServices.datosCrypto()
      .subscribe( response => {
        this.coins1 = response;
      });
  }
}
