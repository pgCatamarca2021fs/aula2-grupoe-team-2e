/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiDatosDeCryptosService } from './apiDatosDeCryptos.service';

describe('Service: ApiDatosDeCryptos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDatosDeCryptosService]
    });
  });

  it('should ...', inject([ApiDatosDeCryptosService], (service: ApiDatosDeCryptosService) => {
    expect(service).toBeTruthy();
  }));
});
