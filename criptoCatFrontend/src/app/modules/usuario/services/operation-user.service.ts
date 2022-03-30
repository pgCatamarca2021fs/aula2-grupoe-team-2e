import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import FormOperacion from '../interfaces/interfaceCompra';

@Injectable({
  providedIn: 'root'
})
export class OperationUserService {

  private readonly URL = environment.api

  constructor(private http: HttpClient ) { }

  buyCurrency = ( idUsuario: number , compraUsuario: FormOperacion ): Observable<FormOperacion> => {
    return this.http.post<FormOperacion>(`${this.URL}/UsuarioOperacion/${idUsuario}`,compraUsuario)
  }
}
