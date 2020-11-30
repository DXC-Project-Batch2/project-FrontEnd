import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTripComponent } from './cancel-trip.component';

describe('CancelTripComponent', () => {
  let component: CancelTripComponent;
  let fixture: ComponentFixture<CancelTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
