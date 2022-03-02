import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent,
  },
  {
    path:'registro',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
