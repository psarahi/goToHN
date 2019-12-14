import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioEncabezadoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getItinerarioEncabezado() {
    return this.http.get(this.baseUrl + 'ItinerarioEncabezado');
  }

  postItinerarioEncabezado(itinerario) {
    return this.http.post(this.baseUrl + 'ItinerarioEncabezado', itinerario);

  }
}
