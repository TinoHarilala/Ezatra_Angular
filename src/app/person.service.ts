import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl="http://localhost:53651/api/";
  constructor(private http:HttpClient) { }

  public getAllPerson():Observable<any>{
    return this.http.get(this.baseUrl+"Personne");
  }
}
