import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Modelos/usuario';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  pass: string = '';
  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioService,
    private route: Router,
    private storage: Storage,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.usuarioService.getUsuario().toPromise().then((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  async login() {
    const usuario = this.usuarios.filter(x => (x.usuarioNombre === this.user && x.usuarioClave === this.pass))
    console.log(usuario);
    if (usuario.length === 1) {
      console.log('entro');
      this.storage.set('usuarioActual', usuario).then(
        res => {
          this.route.navigate(['dashboard/tabs/tab1']);
        }
      );
    } else {
      console.log('Login error');
      const alert = await this.alertCtrl.create({
        header: 'Credenciales invalidas',
        message: 'Intentelo de nuevo',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}


