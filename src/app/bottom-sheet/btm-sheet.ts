import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'btm-sheet',
  templateUrl: './btm-sheet.html'
})
export class BtmSheet {

  users: any;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.get('users?page=1').subscribe(res => {
      this.users = res;
      console.log('Data response', this.users);
    });
  }

}