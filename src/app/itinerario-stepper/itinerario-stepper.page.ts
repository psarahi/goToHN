import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-itinerario-stepper',
  templateUrl: './itinerario-stepper.page.html',
  styleUrls: ['./itinerario-stepper.page.scss'],
})
export class ItinerarioStepperPage implements OnInit {

  ciudad: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
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
