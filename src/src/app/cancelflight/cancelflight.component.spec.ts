import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelflightComponent } from './cancelflight.component';

describe('CancelflightComponent', () => {
  let component: CancelflightComponent;
  let fixture: ComponentFixture<CancelflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
