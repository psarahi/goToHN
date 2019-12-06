import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerario-detalle',
  templateUrl: './itinerario-detalle.page.html',
  styleUrls: ['./itinerario-detalle.page.scss'],
})
export class ItinerarioDetallePage implements OnInit {

  slideOpts: any;
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
