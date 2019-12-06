import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getActividades() {
    return this.http.get<any[]>('/assets/data/actividades.json');
  }
}
