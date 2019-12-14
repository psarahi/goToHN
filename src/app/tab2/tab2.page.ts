import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  userLogin: any = [];
  constructor(private storage: Storage,
    private route: Router) { }

  ngOnInit() {
    this.storage.get('usuarioActual').then(data => {
      this.userLogin = data[0];
      console.log(this.userLogin);
    });
  }

  logout() {

    this.storage.remove('usuarioActual');
    this.route.navigate(['']);

  }

}
