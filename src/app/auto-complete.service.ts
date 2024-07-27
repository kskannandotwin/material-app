import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  constructor(private http: HttpClient) { }

  opts = [];

  getData() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(tap(data => this.opts = data))
  }

  getCatsData() {
    return this.opts.length ?
      of(this.opts) :
      this.http.get<any>('https://api.thecatapi.com/v1/breeds').pipe(tap(data => this.opts = data))
  }
}
