import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Modelos/usuario';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  arrayUsuario: Usuario[] = [];
  usuario: Usuario;
  constructor(private usuarioService: UsuarioService,
    private storage: Storage,
    private router: Router) {
    this.usuario = new Usuario();

  }

  ngOnInit() {


    this.usuarioService.getUsuario().subscribe(
      data => {
        console.log(data);

      }
    );
  }

  onSubmit(usuario) {
    console.log(usuario);
    usuario.usuarioMedioTransporte = '';
    usuario.usuarioProfesion = '';
    usuario.usuarioInteres = '';
    usuario.tipoUsuario_Id = 1;
    usuario.tipoPersonalidad_Id = 1;
    usuario.estadoCivil_Id = 1;
    usuario.tipoAmbiente_Id = 1;
    this.usuarioService.postUsuario(usuario).toPromise().then(
      (data: Usuario) => {
        this.arrayUsuario.push(data); // {...data} spread operator
        console.log(this.arrayUsuario);
        this.storage.set('usuarioActual', usuario).then(
          res => {
            console.log(res);
            this.router.navigate(['dashboard/tabs/tab1']);
          }
        );

      }
    );




  }

}
