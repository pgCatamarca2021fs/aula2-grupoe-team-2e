import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor( private http: HttpClient ) { }

  
  enviarCredenciales(email:string, contrasena:string):Observable<any>{

    const body = {
      email, //test@test.com
      contrasena//12345678
    }

    return this.http.post<Usuario>(`${this.URL}/Usuario/Login`,body)
  };
}
