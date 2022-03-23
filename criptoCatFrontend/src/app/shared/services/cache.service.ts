import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  get(key:string) {
    const serialized = localStorage.getItem(key);
    if(serialized != null)
      return JSON.parse(serialized)
    else 
      return serialized;
  }
  set(key:string, value: object) {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  }
}