import { TestBed } from '@angular/core/testing';

import { SecurityquestionService } from './securityquestion.service';

describe('SecurityquestionService', () => {
  let service: SecurityquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
