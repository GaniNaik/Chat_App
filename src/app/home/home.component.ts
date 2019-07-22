import { Component, OnInit } from '@angular/core';;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
username;
password;
data:any

  constructor(private router: Router,private http: HttpClient,private location: Location ) {   }

  
  ngOnInit() {

  }


  login(username,password)    // function body
  {
   
    //alert(username+" "+password);

    var c=username+","+password;
    this.http.get("http://localhost:8080/loginuser"+c,{}).subscribe( (data: any[]) => {  // nodejs server running on localhost with port 8080 and url as userdetails
        
       if(data.length==0)
       {
         alert("No data found");      // if data is array of objects and its length==0 , alert("no data")
       }
       else{
         alert("user already exist    " + (data[0].username).toUpperCase());

       //  this.router.navigateByUrl('/message',{ data1: { "entity": data[0].username } });

         this.router.navigate(['/message'], {state: {data: {"username":data[0].username,"password":data[0].password}}});
       }

        
    })
  }  // end login()

  






                 

 

}  // end of homecoponent class
