import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

export interface Cat {
  _id: string;
  text: string;
  status: {
    verified: boolean;
    sentCount: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(public http: HttpClient) { }

  getData(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/facts`).toPromise();
  }
}
