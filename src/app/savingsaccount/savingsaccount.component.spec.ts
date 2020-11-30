import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsaccountComponent } from './savingsaccount.component';

describe('SavingsaccountComponent', () => {
  let component: SavingsaccountComponent;
  let fixture: ComponentFixture<SavingsaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
