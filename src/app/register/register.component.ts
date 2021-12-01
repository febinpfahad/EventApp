import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uid=""
  uname=""
  upswd=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  register(){
    var userid=this.uid
   var username=this.uname
   var password=this.upswd
   console.log(userid,username,password)
  
    
     this.ds.register(userid,username,password)
     .subscribe((result:any)=>{
      if(result){
        alert(result.message)
       // this.router.navigateByUrl("")
      }
    },
      (result:any)=>{
        alert(result.error.message)
      })
     
    }
    
  }


