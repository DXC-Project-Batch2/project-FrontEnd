import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightByUserComponent } from './search-flight-by-user.component';

describe('SearchFlightByUserComponent', () => {
  let component: SearchFlightByUserComponent;
  let fixture: ComponentFixture<SearchFlightByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
