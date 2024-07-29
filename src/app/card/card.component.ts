import { Component } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  users: any[] = [];
  constructor(private cardService: CardService) { }
  ngOnInit() {
    this.cardService.getCards().subscribe((data) => {
      this.users = data;
      console.log('Data response', this.users);
    });
  }
}
