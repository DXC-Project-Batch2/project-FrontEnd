import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:9092/booking';

  private API_URl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getBooking(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchBooking/${bookingId}`);
  }

  createBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.API_URl}TicketBooking`, booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.API_URl}TicketBooking/${id}`, { responseType: 'text' });
  }
}
