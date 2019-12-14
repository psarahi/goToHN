import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioDetalleService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getItinerarioDetalle() {
    return this.http.get(this.baseUrl + 'ItinerarioDetalle');
  }

  postItinerarioDetalle(itinerario) {
    return this.http.post(this.baseUrl + 'ItinerarioDetalle', itinerario);
  }
}
