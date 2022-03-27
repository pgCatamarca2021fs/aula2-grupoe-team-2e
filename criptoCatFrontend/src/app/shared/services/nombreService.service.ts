import { EventEmitter, Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class NombreServiceService {
Nombre$ =  new EventEmitter<string>();
constructor() { }

}
