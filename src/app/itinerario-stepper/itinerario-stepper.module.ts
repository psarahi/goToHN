import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarioStepperPageRoutingModule } from './itinerario-stepper-routing.module';

import { ItinerarioStepperPage } from './itinerario-stepper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioStepperPageRoutingModule
  ],
  declarations: [ItinerarioStepperPage]
})
export class ItinerarioStepperPageModule {}
