import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { AutoCompleteService } from '../auto-complete.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  myControl = new FormControl();
  options = [];
  cats = [];
  filteredCatOptions: Observable<any[]>;
  filteredOptions: Observable<any[]>;

  constructor(private autoCompleteService: AutoCompleteService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    ),
    this.filteredCatOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filterCat(val || '')
      })
    )
  }

  ngOnInit() {
    this.autoCompleteService.getData().subscribe(data => {
      this.options = data;
      console.log(this.options);
    })
    this.autoCompleteService.getCatsData().subscribe(data => {
      this.cats = data;
      console.log(this.cats);
    })
  }

  filter(val: string): Observable<any[]> {
    // call the service which makes the http-request
    return this.autoCompleteService.getData()
      .pipe(
        map(response => response.filter((option: { name: string; }) => {
          return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
        }))
      )
  }

  filterCat(val: string): Observable<any[]> {
    // call the service which makes the http-request
    return this.autoCompleteService.getCatsData()
      .pipe(
        map(response => response.filter((cat: { name: string; }) => {
          return cat.name.toLowerCase().indexOf(val.toLowerCase()) === 0
        }))
      )
  }
}
