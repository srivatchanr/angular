import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlantService } from '../plant.service';
import { plants } from '../plants.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-listdata',
  templateUrl: './listdata.component.html',
  styleUrls: ['./listdata.component.css']
})
export class ListdataComponent implements OnInit {
[x: string]: any;
  ps:any;
  psdata: Subscription = new Subscription;

  constructor(private plantservice:PlantService) { }

  ngOnInit(): void {
    this.psdata=this.plantservice.listdata()
    .subscribe(r=>{
      this.ps=r;
      console.log(this.ps);
    })
  }
  ngOnDestroy() {
    this.psdata.unsubscribe();
  }

}