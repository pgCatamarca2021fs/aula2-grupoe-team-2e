import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilleteraPageComponent } from './pages/billetera-page/billetera-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
       
        children: [
            {
                path:'inicio',
                component: InicioUsuarioComponent,
                // outlet: 'child',
            },
            {
                path:'billetera',
                component: BilleteraPageComponent,
                // outlet: 'child',
            },
            {
                path:'historial',
                component: HistorialPageComponent,
            }
        ]
    },
    {
        path:'**',
        redirectTo:'/usuario/inicio'
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
