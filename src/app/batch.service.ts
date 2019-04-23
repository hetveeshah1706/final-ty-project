import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
url:string=url.endpoint+'batch/';
  constructor(private _http:HttpClient) { }

  getAllBatch(){
   return this._http.get(this.url);
  }
}
