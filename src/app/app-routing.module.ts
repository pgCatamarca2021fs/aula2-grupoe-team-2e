import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './modules/usuario/pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'usuario',
    // component: DashboardPageComponent,
    loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  // {
  //   path:'**',
  //   redirectTo: '/home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
