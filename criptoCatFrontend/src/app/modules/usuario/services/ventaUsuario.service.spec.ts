/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VentaUsuarioService } from './ventaUsuario.service';

describe('Service: VentaUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VentaUsuarioService]
    });
  });

  it('should ...', inject([VentaUsuarioService], (service: VentaUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
