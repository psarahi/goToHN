import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Modelos/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario: Usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {


    this.usuarioService.getUsuario().subscribe(
      data => {
        console.log(data);

      }
    );
  }

  onSubmit(usuario) {
    console.log(usuario);


  }

}
