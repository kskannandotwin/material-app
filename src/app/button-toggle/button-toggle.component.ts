import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent {
  users: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('users?page=1').subscribe(res => {
      this.users = res;
      console.log('Data response', this.users);
    });
  }
}
