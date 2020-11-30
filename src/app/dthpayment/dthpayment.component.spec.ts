import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DthbillComponent } from './dthpayment.component';

describe('DthbillComponent', () => {
  let component: DthbillComponent;
  let fixture: ComponentFixture<DthbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DthbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DthbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
