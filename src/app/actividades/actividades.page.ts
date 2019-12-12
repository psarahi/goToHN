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
  constructor(
    private actividadService: ActividadService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ciudad = this.router.getCurrentNavigation().extras.state.ciudad;
        console.log(this.ciudad + ' hhh');
      }
    });

  }
  ngOnInit() {
    this.actividadObservable = this.actividadService.getActividades().subscribe(
      dat => {

        this.actividades = dat;
        //this.actividades = this.actividades.filter(x => x.lugar == this.ciudad);
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

  confirmarSeleccionDeActividades(){

    const navigationExtras: NavigationExtras = {
      state: {
        actividadesSeleccionadas: this.actividadesSeleccionadas
      }
    };
    this.router.navigate(['prioridad-selector'], navigationExtras);
  }

  ngOnDestroy(): void {
    this.actividadObservable.unsubscribe();
  }

}
