import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'itinerario-stepper',
    loadChildren: () => import('./itinerario-stepper/itinerario-stepper.module').then( m => m.ItinerarioStepperPageModule)
  },
  {
    path: 'itinerario-detalle',
    loadChildren: () => import('./itinerario-detalle/itinerario-detalle.module').then( m => m.ItinerarioDetallePageModule)
  },
  {
    path: 'actividades',
    loadChildren: () => import('./actividades/actividades.module').then( m => m.ActividadesPageModule)
  },
  {
    path: 'prioridad-selector',
    loadChildren: () => import('./prioridad-selector/prioridad-selector.module').then( m => m.PrioridadSelectorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
