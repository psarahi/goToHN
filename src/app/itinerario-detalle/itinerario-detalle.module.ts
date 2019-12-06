import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarioDetallePageRoutingModule } from './itinerario-detalle-routing.module';

import { ItinerarioDetallePage } from './itinerario-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioDetallePageRoutingModule
  ],
  declarations: [ItinerarioDetallePage]
})
export class ItinerarioDetallePageModule {}
