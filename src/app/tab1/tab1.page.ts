import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ItinerarioEncabezadoService } from '../Services/itinerario-encabezado.service';
import { Usuario } from '../Modelos/usuario';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  slideOpts: any;
  itinerariosList: any;
  usuarioActual: any;

  constructor(private storage: Storage, private itinerarioEncabezadoService: ItinerarioEncabezadoService, private router: Router) { }

  ngOnInit() {
    this.storage.get('usuarioActual').then(data => {
      this.usuarioActual = data[0];
    });
    this.itinerarioEncabezadoService.getItinerarioEncabezado().subscribe((itinerarios: any) =>{
      this.itinerariosList = itinerarios.filter((itinerario: any) => itinerario.usuario_Id === this.usuarioActual.usuarioId);
      console.log(this.itinerariosList);
    });

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

  doRefresh(event) {
    this.itinerarioEncabezadoService.getItinerarioEncabezado().toPromise().then((itinerarios: any) =>{
      this.itinerariosList = itinerarios.filter((itinerario: any) => itinerario.usuario_Id === this.usuarioActual.usuarioId);
      console.log(this.itinerariosList);
      event.target.complete();
    });
  }

  cargaDetalle( itinerario){
    const navigationExtras: NavigationExtras = {
      state: {
        Encabezado: itinerario,
      }
    };
    this.router.navigate(['itinerario-detalle'], navigationExtras);
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
