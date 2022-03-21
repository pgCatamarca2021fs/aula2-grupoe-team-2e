import { TestBed } from '@angular/core/testing';

import { UsuarioApiService } from './usuario-api.service';

describe('UsuarioApiService', () => {
  let service: UsuarioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
