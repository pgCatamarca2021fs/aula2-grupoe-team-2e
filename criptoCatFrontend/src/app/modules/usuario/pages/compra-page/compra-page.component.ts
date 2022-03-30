import { Component, OnInit } from '@angular/core';
import { ApiDatosDeCryptosService } from '../../services/apiDatosDeCryptos.service';
import Coin from '../../interfaces/interfaceCoin';
import FormOperacion from '../../interfaces/interfaceCompra';
import { CacheService } from 'src/app/shared/services/cache.service';
import { MonedaEjemplo } from 'src/app/shared/class/monedaEjemplo';


@Component({
  selector: 'app-compra-page',
  templateUrl: './compra-page.component.html',
  styleUrls: ['./compra-page.component.css']
})
export class CompraPageComponent implements OnInit {

  private monedaVacia= new MonedaEjemplo();

  usuarioCompra: FormOperacion = {
    coinSelected: this.monedaVacia.monedaEjemplo,
    cantidadPesos : 0,
    cantidadCripto : 0,
    tipoOperacion : 'COMPRA'
  }
  
  coins1: Coin[] = []

  convertionCrypto(){
    console.log(this.usuarioCompra.coinSelected?.current_price) //valor en dolar
    this.usuarioCompra.cantidadCripto = this.usuarioCompra.cantidadPesos/108,56; // se pasa de peso a dolar
    this.usuarioCompra.cantidadCripto =  this.usuarioCompra.cantidadCripto / this.usuarioCompra.coinSelected?.current_price!;
  }

  isDefined = () => {
    const defined: boolean = Boolean(this.usuarioCompra.coinSelected?.id);
    return defined;
  }

  constructor( private apiDatosDeCryptosServices:ApiDatosDeCryptosService, private cacheService: CacheService) { }
  pesosaldoarg:number =0;
  ngOnInit(){
    
    console.log(this.isDefined());
    this.apiDatosDeCryptosServices.datosCrypto()
      .subscribe( response => {
        this.coins1 = response;
      });
    this.pesosaldoarg= this.cacheService.usuarioCache.cuenta[0].billeteras[0].monto_dinero;
  }

  onComprar = () =>{
    console.log(this.usuarioCompra);
  }
}