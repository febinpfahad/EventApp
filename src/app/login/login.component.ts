import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uid=""
upswd=""
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
login(){

  var uid=this.uid
  var upswd=this.upswd
  this.ds.login(uid,upswd)
  .subscribe((result:any)=>{
   if(result)
   { 
     //console.log(result)
     localStorage.setItem("token",result.token)
     localStorage.setItem("currentId",result.currentId)

     localStorage.setItem("currentUser",result.currentUser)
     alert(result.message)
     this.router.navigateByUrl("eventform")
     
   }
 },
 (result)=>{
   alert(result.error.message)
   
 })
 
 }
 deleteAcc(){
  this.ds.deleteAcc()
  .subscribe((result:any)=>{
   if(result)
   { 
     //console.log(result)
    var userid= localStorage.setItem("currentId",result.currentId)

     alert(result.message)
     
   }
 },
 (result)=>{
   alert(result.error.message)
   
 })
 
 }
 }
 
 


