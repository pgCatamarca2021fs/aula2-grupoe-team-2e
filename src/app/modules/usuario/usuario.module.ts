import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PrecioCryptoComponent } from './precioCrypto/precioCrypto.component';
import { FormsModule } from '@angular/forms';
import { ArgMoneyPipe } from './pipes/argMoney.pipe';


@NgModule({
  declarations: [
    DashboardPageComponent,
    PrecioCryptoComponent,
    ArgMoneyPipe
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
  ]
})
export class UsuarioModule { }
