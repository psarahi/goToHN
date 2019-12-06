import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarioDetallePage } from './itinerario-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerarioDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarioDetallePageRoutingModule {}
