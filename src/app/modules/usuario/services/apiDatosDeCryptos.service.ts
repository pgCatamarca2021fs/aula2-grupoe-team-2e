import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Coin from '../interfaces/interfaceCoin';


@Injectable({
    providedIn: 'root'
})
export class ApiDatosDeCryptosService {

    private _moneda: Coin[]= [];
    
    public get moneda() : Coin[] {
        return [...this._moneda];
    }
    
    constructor( private http:HttpClient) { }
    
    datosCrypto = (): Observable<any> => { 

        return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    }
}
