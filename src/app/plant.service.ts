import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {plants} from './plants.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  baseUrl:string = "https://127.0.0.1:5000/"
  constructor(private httpclient:HttpClient) { }

  public listdata():Observable<plants>{
    /*return this.httpclient.get('https://127.0.0.1:5000/');*/
    const a=this.httpclient.get<plants[]>(this.baseUrl);
    console.log(JSON.stringify(a));
    return this.httpclient.get(this.baseUrl);
  }
}
