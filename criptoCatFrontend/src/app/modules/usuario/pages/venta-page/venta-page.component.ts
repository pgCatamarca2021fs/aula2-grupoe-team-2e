
import { Component, OnInit } from '@angular/core';
import { Billetera, Cuenta } from 'src/app/shared/interfaces/usuarioCache.interface';
import { CacheService } from 'src/app/shared/services/cache.service';
import Coin from '../../interfaces/interfaceCoin';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import FormOperacion from '../../interfaces/interfaceCompra';
import { MonedaEjemplo } from 'src/app/shared/class/monedaEjemplo';

@Component({
  selector: 'app-venta-page',
  templateUrl: './venta-page.component.html',
  styleUrls: ['./venta-page.component.css']
})
export class VentaPageComponent implements OnInit {
  billeteras: Billetera[]= [];
  coins: Coin[] = [];
  filtro: Coin[] = [];
  buscarimagen: Coin[]= [];
  imagen: string = '';
  precio_Crypto_Conturrent=0;
  buscarTexto: string = '';
  valorCantidadDeMonedas= 0;
  valorDeCadaCripto= 0;
  valorDeCadaCriptoEnPesos= 0;
  Total=0;
  private monedaVacia= new MonedaEjemplo();

  usuarioVenta: FormOperacion = {
    coinSelected: this.monedaVacia.monedaEjemplo,
    cantidadPesos : 0,
    cantidadCripto : 0,
    tipoOperacion : 'VENTA'
  }
  Selected=false;
  constructor( private cacheService: CacheService, 
     private http: HttpClient) { }
    id_usuarios: any;
  cambiar(Cantidad:number, buscarTexto?:string):void{
    this.filtro = 
    this.coins.filter(coins => coins.name?.toLowerCase().includes(buscarTexto!.toLowerCase())).slice(0,1);
    this.imagen = this.filtro[0].image;

    this.precio_Crypto_Conturrent= this.filtro[0].current_price* 108.16 // Precio Concurrente en Pesos
    this.Selected = true;
    if(this.Selected){
      this.valorCantidadDeMonedas = Cantidad;
      this.valorDeCadaCriptoEnPesos= this.precio_Crypto_Conturrent;
      this.Total = this.myValue *this.valorDeCadaCriptoEnPesos;
    }
  }
  myValue: any=0;     
    getSliderValue(event:any=0) {
  
    this.myValue = event.target.value;
    this.Total = this.myValue * this.valorDeCadaCriptoEnPesos; 
 }

 enviarVenta(){  
  this.usuarioVenta = {
    coinSelected: this.filtro[0],
    cantidadCripto: this.myValue,
    cantidadPesos : this.Total,
    tipoOperacion : 'VENTA'

  }
 console.log(this.usuarioVenta);
 }
  ngOnInit() {
    this.billeteras = this.cacheService.usuarioCache.cuenta[0].billeteras;
    this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe( 
      (res)=> {
        this.coins = res;
      }, 
    (err) => console.log(err));
  }

}
