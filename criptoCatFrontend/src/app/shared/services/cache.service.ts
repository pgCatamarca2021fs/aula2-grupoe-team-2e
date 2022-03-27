import { Injectable } from "@angular/core";
import { UsuarioCache } from "../interfaces/usuarioCache.interface";

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private _usuarioCache!: UsuarioCache;

  public get usuarioCache() : UsuarioCache {
    return {...this._usuarioCache};
  };

  constructor(){
    // if (localStorage.getItem('usuario')) {
    //   this._usuarioCache = JSON.parse( localStorage.getItem('usuario')! );
    // };
  }

  get(key:string): void {
    const serialized = localStorage.getItem(key);
    if(serialized != null)
      this._usuarioCache = JSON.parse(serialized);
    else
      this._usuarioCache;
  }

  getDevolver(key:string): UsuarioCache | null {
    const serialized = localStorage.getItem(key);
    if(serialized != null)
      return JSON.parse(serialized);
    else
      return serialized;
  }

  set(key:string, value: object) {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  }

  quit(key: string){
    localStorage.removeItem(key);
  }
}
