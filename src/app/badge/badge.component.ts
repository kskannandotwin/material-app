import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  notificationCount = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNotificationCount();
  }

  fetchNotificationCount() {
    this.http.get<{ count: number }>('http://localhost:3000/count').subscribe(data => {
      this.notificationCount = data.count;
    });
  }
}
