import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

export interface Cat {
  status: {
    verified: boolean;
    sentCount: number;
  };
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: boolean;
  used: boolean;
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
