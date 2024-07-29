import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  users: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('users?page=1').subscribe(res => {
      this.users = res;
      console.log('Data response', this.users);
    });

  }
}