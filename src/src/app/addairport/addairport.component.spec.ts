import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddairportComponent } from './addairport.component';

describe('AddairportComponent', () => {
  let component: AddairportComponent;
  let fixture: ComponentFixture<AddairportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddairportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
