import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../modals/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private httpClient: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`http://localhost:7000/bookings`);
  }
}
