import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtlitybillsComponent } from './utlitybills.component';

describe('UtlitybillsComponent', () => {
  let component: UtlitybillsComponent;
  let fixture: ComponentFixture<UtlitybillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtlitybillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtlitybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
