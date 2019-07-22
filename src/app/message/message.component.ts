import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  nouser;
  username;
  selectedNote=false;
  loginuser;
  message;
  message1;


  constructor(private http: HttpClient) { }

  ngOnInit() {

      
   
    console.log(history.state.data)

    this.loginuser=history.state.data.username;

    

    var c=history.state.data.username+","+history.state.data.password;

    console.log(c)

    this.http.get("http://localhost:8080/messageuser"+c,{}).subscribe( (data: any[]) => {  // nodejs server running on localhost with port 8080 and url as userdetails
        
       if(data.length==0)
       {
         this.nouser="No User";
              // if data is array of objects and if its length==0 then it prints No User to chat
       }
       else
       {
        console.log(data);

        this.username=data;
         
       }
  
    })

  }

  getsingleuser(username)
  {
    this.selectedNote=true;

    var c=username+","+history.state.data.username;

    this.http.get("http://localhost:8080/getsingleuser"+c,{}).subscribe( (data: any[]) => {  // nodejs server running on localhost with port 8080 and url as userdetails
        
    this.username=data;

    this.http.get("http://localhost:8080/getsendby"+c,{}).subscribe( (data: any[]) => {  // nodejs server running on localhost with port 8080 and url as userdetails
        
    console.log(data)
    this.message=data[0].message+"("+username+")";


    this.http.get("http://localhost:8080/getmessage"+c,{}).subscribe( (data: any[]) => {  // nodejs server running on localhost with port 8080 and url as userdetails
        
    console.log(data)
    this.message1=data[0].message+"("+history.state.data.username+")";
    
  })

  })

    
     
 })
  
  
  }

  sendmessage(sender,receiver,message)
  {


  //console.log(receiver[0].username)

    let c=sender+','+receiver[0].username+','+message;

    console.log(c)
  
    this.http.post('http://localhost:8080/sendmsgtouser' +c,{} ).subscribe(result=>{console.log(result)
    
                     });
  }

}
