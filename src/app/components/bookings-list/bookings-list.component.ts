import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Booking } from 'src/app/modals/booking';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {

  // properties
  bookings: MatTableDataSource<Booking> = null as any;
  columnsToDisplay: string[] = ['customerName', 'location', 'date', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.bookingsService.getBookings().subscribe((response: Booking[]) => {
      this.bookings = new MatTableDataSource<Booking>(response);
      this.bookings.paginator = this.paginator;
    }, (error) => {
      console.log(error);
    });
  }

}
