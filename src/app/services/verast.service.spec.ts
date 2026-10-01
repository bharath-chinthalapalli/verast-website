import { TestBed } from '@angular/core/testing';

import { VerastService } from './verast.service';

describe('VerastService', () => {
  let service: VerastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
