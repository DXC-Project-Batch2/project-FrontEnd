import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyscheduleflightComponent } from './modifyscheduleflight.component';

describe('ModifyscheduleflightComponent', () => {
  let component: ModifyscheduleflightComponent;
  let fixture: ComponentFixture<ModifyscheduleflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyscheduleflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyscheduleflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
