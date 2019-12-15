import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItinerarioDetalle } from '../Modelos/itinerarioDetalle';
import { ItinerarioDetalleService } from "../Services/itinerario-detalle.service";

@Component({
  selector: 'app-prioridad-selector',
  templateUrl: './prioridad-selector.page.html',
  styleUrls: ['./prioridad-selector.page.scss'],
})
export class PrioridadSelectorPage implements OnInit {
  actividadesSeleccionadas: any;
  idItinerarioEncabezado: number = 0;
  actividadesConPrioridad: ItinerarioDetalle[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itinerarioDetalleService: ItinerarioDetalleService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.actividadesSeleccionadas = this.router
        .getCurrentNavigation()
        .extras.state.actividadesSeleccionadas.map((actividad) =>  {
          return { ...actividad, prioridad_Id: -2 };
        });

        this.idItinerarioEncabezado = this.router.getCurrentNavigation().extras.state.idItinerarioEncabezado;
        console.log(this.actividadesSeleccionadas);
      }
    });
  }

  ngOnInit() {

  }

  cambio(event, actividad) {
    actividad.prioridad_Id = event.detail.value;
    this.actividadesSeleccionadas = this.actividadesSeleccionadas
    .map((actividadEnArreglo) => actividadEnArreglo.actividadId === actividad.actividadId ? actividad : actividadEnArreglo );
    console.log(this.actividadesSeleccionadas);
  }

  async enviarItinerarioDetalle() {
    this.actividadesConPrioridad = this.actividadesSeleccionadas.map((actividad) => {
      const actividadConPrioridad: ItinerarioDetalle = {
        itinerarioEncabezado_Id: this.idItinerarioEncabezado,
        actividad_Id: actividad.actividadId,
        prioridad_Id: actividad.prioridad_Id * -1,
      };
      return actividadConPrioridad;
    });

    for (const itinerarioDetalle of this.actividadesConPrioridad) {
      const result = await this.itinerarioDetalleService.postItinerarioDetalle(itinerarioDetalle).toPromise();
      console.log(result);
    }
    this.router.navigate(['dashboard/tabs/tab1']);
  }
}
