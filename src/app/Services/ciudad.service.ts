import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Ciudad } from '../Modelos/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getCiudades() {
    return this.http.get<Ciudad[]>(this.baseUrl + 'ciudad');
  }
}
