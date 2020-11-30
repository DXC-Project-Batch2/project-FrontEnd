import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringdepositComponent } from './recurringdeposit.component';

describe('RecurringdepositComponent', () => {
  let component: RecurringdepositComponent;
  let fixture: ComponentFixture<RecurringdepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringdepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
