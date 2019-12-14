import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient
  ) { }

  postUsuario(usuario) {
    return this.http.post(this.baseUrl + 'Usuario', usuario);

  }

  getUsuario() {
    return this.http.get(this.baseUrl + 'Usuario');
  }

}
