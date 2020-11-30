import { TestBed } from '@angular/core/testing';

import { IpayService } from './ipay.service';

describe('ProductService', () => {
  let service: IpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
