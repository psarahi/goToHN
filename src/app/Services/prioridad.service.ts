import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrioridadService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPrioridad() {
    return this.http.get(this.baseUrl + 'Prioridad');
  }

}
