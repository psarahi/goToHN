import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItinerarioStepperPage } from './itinerario-stepper.page';

const routes: Routes = [
  {
    path: '',
    component: ItinerarioStepperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarioStepperPageRoutingModule {}
