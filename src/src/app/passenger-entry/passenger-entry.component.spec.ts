import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerEntryComponent } from './passenger-entry.component';

describe('PassengerEntryComponent', () => {
  let component: PassengerEntryComponent;
  let fixture: ComponentFixture<PassengerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
