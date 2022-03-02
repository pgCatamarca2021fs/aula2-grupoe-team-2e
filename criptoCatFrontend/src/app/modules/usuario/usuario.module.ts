import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PrecioCryptoComponent } from './precioCrypto/precioCrypto.component';
import { FormsModule } from '@angular/forms';
import { ArgMoneyPipe } from './pipes/argMoney.pipe';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';
import { BilleteraPageComponent } from './pages/billetera-page/billetera-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ArgMoneyPipe,
    DashboardPageComponent,
    PrecioCryptoComponent,
    InicioUsuarioComponent,
    BilleteraPageComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class UsuarioModule { }
