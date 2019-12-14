import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActividadService } from '../Services/actividad.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit, OnDestroy {

  actividadObservable: any;
  actividades: any[] = [];
  actividadesSeleccionadas: any[] = [];
  ciudad: any = '';
  idItinerarioEncabezado: number = 0;
  constructor(
    private actividadService: ActividadService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ciudad = this.router.getCurrentNavigation().extras.state.ciudad;
        this.idItinerarioEncabezado = this.router.getCurrentNavigation().extras.state.idItinerario; //Este es el id del itinerario creado
        console.log(this.ciudad, ' ', this.idItinerarioEncabezado);
      }
    });

  }
  ngOnInit() {
    this.actividadObservable = this.actividadService.getActividadesWithPlaces().subscribe(
      dat => {
        // debugger;
        this.actividades = dat;
        this.actividades = this.actividades.filter(x => x.ciudad_Id == this.ciudad);
        console.log(this.actividades);

      }
    );
  }

  cambio(event, act) {
    //console.log(event, act);

    if (event.detail.checked == true) {
      this.actividadesSeleccionadas.push(act);
      console.log(this.actividadesSeleccionadas);
    } else {
      var index = this.actividadesSeleccionadas.indexOf(act);
      if (index > -1) {
        this.actividadesSeleccionadas.splice(index, 1);
      }

      console.log(this.actividadesSeleccionadas);

    }

  }

  confirmarSeleccionDeActividades() {

    const navigationExtras: NavigationExtras = {
      state: {
        actividadesSeleccionadas: this.actividadesSeleccionadas,
        idItinerarioEncabezado: this.idItinerarioEncabezado
      }
    };
    this.router.navigate(['prioridad-selector'], navigationExtras);
  }

  ngOnDestroy(): void {
    this.actividadObservable.unsubscribe();
  }

}
