import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrioridadSelectorPageRoutingModule } from './prioridad-selector-routing.module';

import { PrioridadSelectorPage } from './prioridad-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrioridadSelectorPageRoutingModule
  ],
  declarations: [PrioridadSelectorPage]
})
export class PrioridadSelectorPageModule {}
