import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicstatementComponent } from './periodicstatement.component';

describe('PeriodicstatementComponent', () => {
  let component: PeriodicstatementComponent;
  let fixture: ComponentFixture<PeriodicstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicstatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
