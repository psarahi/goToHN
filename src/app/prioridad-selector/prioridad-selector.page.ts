import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prioridad-selector',
  templateUrl: './prioridad-selector.page.html',
  styleUrls: ['./prioridad-selector.page.scss'],
})
export class PrioridadSelectorPage implements OnInit {
  actividadesSeleccionadas: any;

  constructor(private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.actividadesSeleccionadas = this.router.getCurrentNavigation().extras.state.actividadesSeleccionadas;
        console.log(this.actividadesSeleccionadas);
      }
    });
  }

  ngOnInit() {

  }
  cambio(event) {
    console.log(event.detail.value);

  }


}
