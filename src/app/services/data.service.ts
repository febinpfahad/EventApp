import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  withCredential:true,
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getOptions(){
    const token=localStorage.getItem("token")
    let headers=new HttpHeaders
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }
  
    register(userid:any,username:any,password:any){
      const data={
        userid,
        username,
       password
        
      }
      return this.http.post("http://localhost:3000/register",data)
  }
 

login(userid:any,password:any)
  {
    const data={
      userid,
      password
    }
    return this.http.post("http://localhost:3000/login",data,options)
  }
  eventAdd(eventname:any,eventdate:any)
  {
    const data={
      eventname,
      eventdate
    }
    
   // var userid=localStorage.getItem("currentId")
    return this.http.post("http://localhost:3000/eventadd",data,this.getOptions())
  }
  viewEvent()
  {
    const data={
      
    }
    return this.http.post("http://localhost:3000/eventAll",data,this.getOptions())
  }
  deleteAcc()
  {
    const data={
      
    }
    return this.http.post("http://localhost:3000/deleteAcc",data,this.getOptions())
  }
  edit(uno:any,eventname:any,eventdate:any){

const data={
      uno,
      eventname,
      eventdate
    }
    return this.http.post("http://localhost:3000/eventedit",data,this.getOptions())
  }
 
  }



