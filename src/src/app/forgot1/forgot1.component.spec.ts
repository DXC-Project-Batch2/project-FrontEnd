import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forgot1Component } from './forgot1.component';

describe('Forgot1Component', () => {
  let component: Forgot1Component;
  let fixture: ComponentFixture<Forgot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
