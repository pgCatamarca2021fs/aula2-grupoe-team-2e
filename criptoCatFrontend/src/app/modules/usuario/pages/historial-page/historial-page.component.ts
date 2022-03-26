import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-page',
  templateUrl: './historial-page.component.html',
  styleUrls: ['./historial-page.component.css']
})
export class HistorialPageComponent implements OnInit {

  constructor() { }
    historial=[{
    operacion:'compra',
    moneda: 'bitcoin',
    cantidad: '0.000123',
    monto:'12000',
    cbu:'-',
    fecha: '20/03/2020'
  },
  {
    operacion:'compra',
    moneda: 'bitcoin',
    cantidad: '0.000123',
    monto:'12000',
    cbu:'-',
    fecha: '20/03/2020'
  }]
  ngOnInit() {}

}
