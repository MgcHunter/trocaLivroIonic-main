import { TestBed } from '@angular/core/testing';

import { AutorApiService } from './autor-api.service';

describe('AutorApiService', () => {
  let service: AutorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
