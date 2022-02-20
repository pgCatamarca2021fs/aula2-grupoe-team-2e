import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    HttpClientModule
  ]
})
export class UsuarioModule { }
