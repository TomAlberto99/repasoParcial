import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Person, User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "  http://localhost:3000";

  constructor(private http : HttpClient) { }

  getLogApi (): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }
  getUserToAuth(email : string, password:string) : Observable<User[]>{
    return this.http.get<User []>(`${this.baseUrl}/users?email=${email}&password=${password}`);

  }
  getPerson(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseUrl}/persons`);
  }
  addPerson(createToPerson: Person):Observable<boolean>{
    const urlPerson = `${this.baseUrl}/persons`;
    return this.http.post<boolean>(urlPerson,createToPerson);

  }
  editPersona (id: number, updatePersona : Person): Observable<boolean>{
    const url = `${this.baseUrl}/persons/${id}`;
    return this.http.put<boolean>(url, updatePersona);
  }
  deletePersona(id:number):Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/persons/${id}`).pipe(
      map(resp => true),
      catchError(Error => of(false))
      )
  
  }

}
