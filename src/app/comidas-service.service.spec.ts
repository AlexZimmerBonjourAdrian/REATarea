import { TestBed } from '@angular/core/testing';

import { ComidasServiceService } from './comidas-service.service';

describe('ComidasServiceService', () => {
  let service: ComidasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComidasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
