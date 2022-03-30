import { Component, OnInit } from '@angular/core';
import { ApiDatosDeCryptosService } from '../../services/apiDatosDeCryptos.service';
import Coin from '../../interfaces/interfaceCoin';
import FormOperacion from '../../interfaces/interfaceCompra';
import { CacheService } from 'src/app/shared/services/cache.service';
import { MonedaEjemplo } from 'src/app/shared/class/monedaEjemplo';
import { OperationUserService } from '../../services/operation-user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsuarioCache } from 'src/app/shared/interfaces/usuarioCache.interface';


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
    //valor en dolar
    this.usuarioCompra.cantidadCripto = this.usuarioCompra.cantidadPesos/108,56; // se pasa de peso a dolar
    this.usuarioCompra.cantidadCripto =  this.usuarioCompra.cantidadCripto / this.usuarioCompra.coinSelected?.current_price!;
  }

  isDefined = () => {
    const defined: boolean = Boolean(this.usuarioCompra.coinSelected?.id);
    return defined;
  }


  constructor( private apiDatosDeCryptosServices:ApiDatosDeCryptosService, 
    private operationUserService: OperationUserService,
    private cacheService: CacheService,
    private authService: AuthService,
    private router: Router
  ) { }
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
    const usuario = this.cacheService.getDevolver("usuario");
    if (!usuario?.id_usuario && !this.cacheService.getDevolver("usuario")) {
      return
    }

    this.operationUserService.buyCurrency( usuario?.id_usuario!, this.usuarioCompra).subscribe();

    alert(`Felicidades ${usuario?.nombre} por comprar ${this.usuarioCompra.cantidadCripto} ${this.usuarioCompra.coinSelected?.id}`);
    this.authService.enviarCredenciales(usuario?.email! , usuario?.contraseña!)
      .subscribe( (data: UsuarioCache) =>{
        if (data == null || data == undefined) {
          console.log("Ocurrio un error en la compra");
          return;
        }
        this.cacheService.set("usuario", data);
      })
    
    this.router.navigate(['/usuario/billetera']);
  }
}