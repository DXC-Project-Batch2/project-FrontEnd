import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflightsComponent } from './viewflights.component';

describe('ViewflightsComponent', () => {
  let component: ViewflightsComponent;
  let fixture: ComponentFixture<ViewflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
