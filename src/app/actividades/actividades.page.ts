import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  actividades: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getActividades().subscribe(
      dat => {
        this.actividades = dat;
        console.log(this.actividades);

      }
    );
  }

}
