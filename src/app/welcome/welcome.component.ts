import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',                         // selector for routing
  templateUrl: './welcome.component.html',          // html page linked to  welcome component
  styleUrls: ['./welcome.component.scss']          // scss styles page linked to welcome component
})
export class WelcomeComponent implements OnInit {

  username:any;
  password:any;

  title="Welcome to ChatApp";   

  constructor(private http: HttpClient) {   // this method called when page load


    
  }

  ngOnInit() {  // ngOnInit() method will call after constructor() method

    
  }

  registerUser(username,password)
{

  let c=this.username+','+this.password;

  console.log(c)

  this.http.post('http://localhost:8080/registeruser' +c,{} )
.subscribe(result=>{console.log(result)

  
  this.username="";
  this.password="";
               

   
                   });
}

}
