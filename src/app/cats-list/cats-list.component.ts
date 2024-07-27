import { Component } from '@angular/core';
import { Cat, CatsService } from '../cats.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})
export class CatsListComponent {
  cats: Cat[] = [];

  displayedColumns: string[] = ['_id', 'text'];
  dataSource = new MatTableDataSource<Cat>(this.cats);

  constructor(private catsService: CatsService) {
    this.catsService.getData().then(dataCats => {
      this.cats = dataCats;
      this.dataSource.data = dataCats;
    });
  }


}