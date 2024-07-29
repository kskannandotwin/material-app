import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  users: any[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.getCards().subscribe((data) => {
      this.users = data;
      console.log('Data response', this.users);
    });
  }
}
