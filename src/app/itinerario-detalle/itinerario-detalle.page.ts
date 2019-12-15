import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrawerState } from 'ion-bottom-drawer';
import { ItinerarioEncabezadoService } from '../Services/itinerario-encabezado.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-itinerario-detalle',
  templateUrl: './itinerario-detalle.page.html',
  styleUrls: ['./itinerario-detalle.page.scss'],
})
export class ItinerarioDetallePage implements OnInit {

  slideOpts: any;
  shouldBounce = true;
  disableDrag = false;
  dockedHeight = 300;
  distanceTop = 56;
  drawerState = DrawerState.Bottom;
  states = DrawerState;
  minimumHeight = 0;
  itinerarioEncabezado: any;
  constructor(private itinerarioService: ItinerarioEncabezadoService,
    private router: Router
    ) { }


  ngOnInit() {

      if (this.router.getCurrentNavigation().extras.state) {
        this.itinerarioEncabezado = this.router.getCurrentNavigation().extras.state.Encabezado;
        console.log(this.itinerarioEncabezado);
      }

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
  openDrawer() {
    this.drawerState = this.states.Docked;
    console.log(this.drawerState);
  }

  getCityImage(ciudadId) {
    switch (ciudadId) {
      case 1:
        return 'assets/SanPedroSula.jpg';
      case 2:
        return 'assets/Tegucigalpa.jpg';
      case 3:
        return '../../assets/LaCeiba.jpg';
      case 4:
        return '../../assets/Juticalpa.jpg';
      case 5:
        return '../../assets/SantaRosa.png';
    }
  }
}

