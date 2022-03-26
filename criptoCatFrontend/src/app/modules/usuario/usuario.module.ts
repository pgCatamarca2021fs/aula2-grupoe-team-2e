import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PrecioCryptoComponent } from './precioCrypto/precioCrypto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArgMoneyPipe } from './pipes/argMoney.pipe';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';
import { BilleteraPageComponent } from './pages/billetera-page/billetera-page.component';
import { RouterModule } from '@angular/router';
import { CompraPageComponent } from './pages/compra-page/compra-page.component';
import { VentaPageComponent } from './pages/venta-page/venta-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';


@NgModule({
  declarations: [
    ArgMoneyPipe,
    DashboardPageComponent,
    PrecioCryptoComponent,
    InicioUsuarioComponent,
    BilleteraPageComponent,
    CompraPageComponent,
    VentaPageComponent,
    HistorialPageComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
