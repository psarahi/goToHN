import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private storage: Storage,
    private route: Router) { }

  logout() {

    this.storage.remove('usuarioActual');
    this.route.navigate(['']);

  }

}
