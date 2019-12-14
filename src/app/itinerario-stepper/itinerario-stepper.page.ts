import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CiudadService } from '../Services/ciudad.service';
import { Storage } from '@ionic/storage';
import { ItinerarioEncabezadoService } from '../Services/itinerario-encabezado.service';
import { Ciudad } from '../Modelos/ciudad';
import { ItinerarioEncabezado } from '../Modelos/itinerarioEncabezado';

@Component({
  selector: 'app-itinerario-stepper',
  templateUrl: './itinerario-stepper.page.html',
  styleUrls: ['./itinerario-stepper.page.scss'],
})
export class ItinerarioStepperPage implements OnInit {

  ciudad: string = '';
  ciudades: Ciudad[];
  fechaInicial: any;
  fechaFinal: any;
  itinerarioEncabezado: ItinerarioEncabezado;
  userLogin: any;

  constructor(private router: Router,
              private ciudadService: CiudadService,
              private storage: Storage,
              private itinerarioEncabezadoService: ItinerarioEncabezadoService) {
    this.itinerarioEncabezado = new ItinerarioEncabezado();
  }

  ngOnInit() {

    //console.log(this.storage.get('usuarioActual'));
    this.storage.get('usuarioActual').then(data => {
      this.userLogin = data[0].usuarioId;
      //console.log(this.userLogin);
    });

    this.itinerarioEncabezadoService.getItinerarioEncabezado().subscribe(
      res => {
        console.log(res);

      }
    );

    this.ciudadService.getCiudades().toPromise().then(data => {
      this.ciudades = data;
    });
  }

  openDetailsWithState() {
    debugger;
    this.itinerarioEncabezado.itinerarioEncabezadoNombre = this.ciudades[0].ciudadNombre;
    this.itinerarioEncabezado.itinerarioEncabezadoFechaInicio = this.fechaInicial;
    this.itinerarioEncabezado.itinerarioEncabezadoFechaFinal = this.fechaFinal;
    this.itinerarioEncabezado.lugar_Id = this.ciudades[0].ciudadId;
    this.itinerarioEncabezado.ciudad_Id = this.ciudades[0].ciudadId;
    this.itinerarioEncabezado.usuario_Id = this.userLogin;

    this.itinerarioEncabezadoService.postItinerarioEncabezado(this.itinerarioEncabezado)
      .toPromise()
      .then(data => {
        console.log(data);
        let navigationExtras: NavigationExtras = {
          state: {
            ciudad: this.ciudad
          }
        };
        this.router.navigate(['actividades'], navigationExtras);
      }
      );
  }

}
