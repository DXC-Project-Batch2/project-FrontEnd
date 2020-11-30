import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewairportComponent } from './viewairport.component';

describe('ViewairportComponent', () => {
  let component: ViewairportComponent;
  let fixture: ComponentFixture<ViewairportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewairportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
