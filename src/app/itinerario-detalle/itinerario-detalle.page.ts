import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';

@Component({
  selector: 'app-itinerario-detalle',
  templateUrl: './itinerario-detalle.page.html',
  styleUrls: ['./itinerario-detalle.page.scss'],
})
export class ItinerarioDetallePage implements OnInit {

  slideOpts: any;
  shouldBounce = true;
  disableDrag = false;
  dockedHeight = 150;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 0;

  constructor() { }


  ngOnInit() {
    this.slideOpts = {
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }
    };
  }

}
