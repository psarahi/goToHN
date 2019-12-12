import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CiudadService } from "../Services/ciudad.service";

@Component({
  selector: 'app-itinerario-stepper',
  templateUrl: './itinerario-stepper.page.html',
  styleUrls: ['./itinerario-stepper.page.scss'],
})
export class ItinerarioStepperPage implements OnInit {

  ciudad: string = '';
  ciudades: any[];

  constructor(private router: Router, private ciudadService: CiudadService) { }

  ngOnInit() {
    this.ciudadService.getCiudades().toPromise().then(data => {
      this.ciudades = data;
      console.log(data);
    });
  }

  openDetailsWithState() {
    console.log(this.ciudad);
    let navigationExtras: NavigationExtras = {
      state: {
        ciudad: this.ciudad
      }
    };

    this.router.navigate(['actividades'], navigationExtras);

  }

}
