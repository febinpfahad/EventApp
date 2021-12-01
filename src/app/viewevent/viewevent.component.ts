import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  tempEventData:any;
  tempEventDate:any;

  isDisabled:boolean = true;
  btn1:boolean=true;
  btn2:boolean=true;
  btn3:boolean=false;
  btn4:boolean=false;


  events:any
  userid: any
  constructor(private ds: DataService) {

 }

  ngOnInit(): void {
    this.userid = localStorage.getItem("currentId")
    this.viewevent()
  }

  interchange(){
    this.btn1=!this.btn1;
    this.btn2=!this.btn2;
    this.btn3=!this.btn3;
    this.btn4=!this.btn4;
  }


  viewevent() {

    this.ds.viewEvent()
      .subscribe((result: any) => {
        if (result) {
          //console.log(result);
          this.events = result.event
          this.events.forEach((event:any)=>{
            event.isDisabled=true;
          })
  
        }
      }, (result) => {
        alert(result.error.message);
      })
    console.log(this.events);
  }
  edit(i:any){
    this.tempEventData=this.events[i].eventname;
    this.tempEventDate=this.events[i].eventdate;

    this.events[i].isDisabled="false"
  this.interchange()
  }




     //   let event_name=this.event_name
  //   let event_date=this.event_date
  //   this.ds.edit(eventname,eventdate)
  //   .subscribe((result:any)=>{
  //    if(result)
  //    { 
       
  //      alert(result.message)
       
       
  //    }
  //  },
  //  (result)=>{
  //    alert(result.error.message)
     
  //  })
  
editevent(i:any){
let uno=this.events[i].uno
       let event_name=this.events[i].eventname
    let event_date=this.events[i].eventdate
    console.log(event_name,event_date)
    this.ds.edit(uno,event_name,event_date)
    .subscribe((result:any)=>{
     if(result)
     { 
       
       alert(result.message)
       this.interchange()
this.events[i].isDisabled="true"
       
       
     }
   },
   (result)=>{
     alert(result.error.message)
     
   })

}
cancelevent(i:any){
  this.events[i].eventname=this.tempEventData
  this.events[i].eventdate=this.tempEventDate


this.interchange()
this.events[i].isDisabled="true"



}

  delete(i:any){

  }
}