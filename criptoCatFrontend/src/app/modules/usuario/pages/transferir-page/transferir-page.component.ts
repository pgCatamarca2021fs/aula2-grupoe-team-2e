import { Component, OnInit } from '@angular/core';
import { ApiDatosDeCryptosService } from '../../services/apiDatosDeCryptos.service';
import Coin from '../../interfaces/interfaceCoin';
import { CacheService } from 'src/app/shared/services/cache.service';
import { FormTransferencia } from '../../interfaces/interfaceTransferencia';


@Component({
  selector: 'app-transferir-page',
  templateUrl: './transferir-page.component.html',
  styleUrls: ['./transferir-page.component.css']
})
export class TransferirPageComponent implements OnInit {

  usuarioTransferencia: FormTransferencia = {
    coinSelected: '',
    cantidadCripto : 0,
  }
  
  coins1: Coin[] = []

  convertionCrypto(){
    console.log(this.usuarioTransferencia.coinSelected?.current_price) //valor en dolar
    this.usuarioTransferencia.cantidadCripto =  this.usuarioTransferencia.cantidadCripto / this.usuarioTransferencia.coinSelected?.current_price;
  }

  isDefined = () => {
    const defined: boolean = Boolean(this.usuarioTransferencia.coinSelected);
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

