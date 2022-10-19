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
  ps:any;
  psdata: Subscription = new Subscription;

  constructor(private plantservice:PlantService) { }

  ngOnInit(): void {
    this.psdata=this.plantservice.listdata()
    .subscribe(r=>{
      this.ps=r;})
    /*this.plants=this.plantservice.listdata()
    .subscribe((data:any)=>{
      this.plants=data;
    })*/
  }
  ngOnDestroy() {
    this.psdata.unsubscribe();
  }

}
