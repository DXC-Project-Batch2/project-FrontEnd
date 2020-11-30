import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifibillComponent } from './wifibill.component';

describe('WifibillComponent', () => {
  let component: WifibillComponent;
  let fixture: ComponentFixture<WifibillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifibillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifibillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
