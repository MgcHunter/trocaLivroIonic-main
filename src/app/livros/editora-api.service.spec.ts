import { TestBed } from '@angular/core/testing';

import { EditoraApiService } from './editora-api.service';

describe('EditoraApiService', () => {
  let service: EditoraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditoraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
