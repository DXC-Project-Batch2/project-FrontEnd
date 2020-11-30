import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgot3Component } from './forgot3.component';

describe('Forgot3Component', () => {
  let component: Forgot3Component;
  let fixture: ComponentFixture<Forgot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgot3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
