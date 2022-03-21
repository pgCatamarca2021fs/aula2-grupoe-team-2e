import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilleteraPageComponent } from './pages/billetera-page/billetera-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CompraPageComponent } from './pages/compra-page/compra-page.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';
import { InicioUsuarioComponent } from './pages/inicio-usuario/inicio-usuario.component';
import { VentaPageComponent } from './pages/venta-page/venta-page.component';



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
                path:'compra',
                component: CompraPageComponent,
            },
            {
                path:'historial',
                component: HistorialPageComponent,
            },
            {
                path:'vender',
                component: VentaPageComponent,
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
