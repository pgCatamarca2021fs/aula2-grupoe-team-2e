import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  private readonly urlUsuario = environment.apiUsuario;

  // private urlApiUsuario = 'https://localhost:44315/api/Usuario'

  private _dataUsuario: Usuario = {
    Nombre: '',
    Apellido: '',
    Contraseña: '',
    Dni: '',
    Email: '',
    FechaNacimiento: new Date(),
  }
  
  public get dataUsuario() : Usuario {
    return {...this._dataUsuario};
  }
  

  constructor(private http: HttpClient) { }

  obtenerTodosU = ():Observable<Usuario[]> => {
    console.log("ajsdasd")
    return this.http.get<Usuario[]>(`${this.urlUsuario}`)
  }

  crearUsuario = (dataForm: any): Observable<Usuario> => {

    const { name , lastName , password , birthday , email , dni} = dataForm

    this._dataUsuario = {
      Nombre: name,
      Apellido: lastName,
      Contraseña: password,
      Dni: dni,
      Email: email,
      FechaNacimiento: birthday
    }
    
    return this.http.post<Usuario>(`${this.urlUsuario}`,this._dataUsuario)
      .pipe(
        catchError( err =>{ return this.handleError(err)} )
      );

  }

  enviarCredenciales(email:string, password:string):Observable<any>{

    const body={
      email:email, //test@test.com
      password:password //12345678
    }

    return this.http.post<Usuario>(`${this.urlUsuario}/auth/login`,body)
  };

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
