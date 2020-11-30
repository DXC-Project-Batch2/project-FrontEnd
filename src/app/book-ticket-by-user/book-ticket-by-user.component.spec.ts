import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketByUserComponent } from './book-ticket-by-user.component';

describe('BookTicketByUserComponent', () => {
  let component: BookTicketByUserComponent;
  let fixture: ComponentFixture<BookTicketByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTicketByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
