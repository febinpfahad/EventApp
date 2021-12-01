import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
user:any
  constructor() { 
    this.user=localStorage.getItem("currentUser")
  }

  ngOnInit(): void {
  }

}
