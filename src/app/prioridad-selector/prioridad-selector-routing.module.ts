import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrioridadSelectorPage } from './prioridad-selector.page';

const routes: Routes = [
  {
    path: '',
    component: PrioridadSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrioridadSelectorPageRoutingModule {}
