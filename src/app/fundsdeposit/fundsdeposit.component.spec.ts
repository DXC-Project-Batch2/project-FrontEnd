import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsdepositComponent } from './fundsdeposit.component';

describe('FundsdepositComponent', () => {
  let component: FundsdepositComponent;
  let fixture: ComponentFixture<FundsdepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsdepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
