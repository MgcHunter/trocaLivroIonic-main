import { TestBed } from '@angular/core/testing';

import { LivrosApiService } from './livros-api.service';

describe('LivrosApiService', () => {
  let service: LivrosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
