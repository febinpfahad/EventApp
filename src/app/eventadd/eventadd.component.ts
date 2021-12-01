import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-eventadd',
  templateUrl: './eventadd.component.html',
  styleUrls: ['./eventadd.component.css']
})
export class EventaddComponent implements OnInit {

  event_name=""
  event_date=""
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  add_event(){

    let event_name=this.event_name
    let event_date=this.event_date
    this.ds.eventAdd(event_name,event_date)
    .subscribe((result:any)=>{
     if(result)
     { 
       
       alert(result.message)
       
       
     }
   },
   (result)=>{
     alert(result.error.message)
     
   })
   
   }
   
}

