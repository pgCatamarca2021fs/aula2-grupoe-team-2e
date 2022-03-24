import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  private readonly URL = environment.api;

  // private urlApiUsuario = 'https://localhost:44315/api/Usuario'

  private _dataUsuario: Usuario = {
    nombre: '',
    apellido: '',
    contraseña: '',
    dni: '',
    email: '',
    fecha_nacimiento: new Date(),
  }
  
  public get dataUsuario() : Usuario {
    return {...this._dataUsuario};
  }
  
  constructor(private http: HttpClient) { }

  obtenerTodosU = ():Observable<Usuario[]> => {
    return this.http.get<Usuario[]>(`${this.URL}/Usuario`)
  }

  crearUsuario = (dataForm: any): Observable<Usuario> => {

    const { name , lastName , password , birthday , email , dni} = dataForm

    this._dataUsuario = {
      nombre: name,
      apellido: lastName,
      email: email,
      dni: dni,
      contraseña: password,
      fecha_nacimiento: birthday
    }
    
    return this.http.post<Usuario>(`${this.URL}/Usuario`,this._dataUsuario)
      .pipe(
        catchError( err =>{ return this.handleError(err)} )
      );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Un error ocurrió:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
