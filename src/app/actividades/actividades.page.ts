import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  actividades: any[] = [];
  actividadesSeleccionadas: any[] = [];
  ciudad: any = '';
  constructor(private dataService: DataService, private route: ActivatedRoute,
    private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.ciudad = this.router.getCurrentNavigation().extras.state.ciudad;
        console.log(this.ciudad + ' hhh');
      }
    });

  }
  ngOnInit() {
    this.dataService.getActividades().subscribe(
      dat => {

        this.actividades = dat;
        this.actividades = this.actividades.filter(x => x.lugar == this.ciudad);
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

}