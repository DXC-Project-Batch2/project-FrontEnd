import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchscheduleflightComponent } from './searchscheduleflight.component';

describe('SearchscheduleflightComponent', () => {
  let component: SearchscheduleflightComponent;
  let fixture: ComponentFixture<SearchscheduleflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchscheduleflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchscheduleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
