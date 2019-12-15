import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItinerarioDetallePageRoutingModule } from './itinerario-detalle-routing.module';

import { ItinerarioDetallePage } from './itinerario-detalle.page';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItinerarioDetallePageRoutingModule,
    IonBottomDrawerModule
  ],
  declarations: [ItinerarioDetallePage]
})
export class ItinerarioDetallePageModule {}
