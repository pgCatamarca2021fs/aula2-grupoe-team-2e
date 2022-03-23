import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private sub: BehaviorSubject<boolean>
  constructor() {
    this.sub = new BehaviorSubject<boolean>(false);
  }
  show() {
    this.sub.next(true);
  }

  hide() {
    this.sub.next(false)
  }

  getStatus() {
    return this.sub.asObservable();
  }
}