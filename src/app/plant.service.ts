import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {plants} from './plants.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  constructor(private httpclient:HttpClient) { }

  public listdata():Observable<plants>{
    return this.httpclient.get("http://127.0.0.1:5000/");
  }
}
