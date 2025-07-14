import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ramschema } from '../model/ramschema';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {

   private url:string = "https://webbutveckling.miun.se/files/ramschema.json"
  constructor(private http: HttpClient) { }

  getRamchemaInf(): Observable<Ramschema[]> {
return this.http.get<Ramschema[]>(this.url)

  }
}
