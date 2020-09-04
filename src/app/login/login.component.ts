import { MatSnackBar } from '@angular/material';
import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from "../auth-service.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  constructor(public router:Router,public auth:AuthServiceService,public dbs:DbserviceService,private snakbar:MatSnackBar) {

   }
   login(event)
   {
      
    event.preventDefault();
    
     var susername = event.target.elements[0].value;
      var spassword = event.target.elements[1].value;
      this.dbs.postGet(Globals.url+"/user/login?username="+susername+"&password="+spassword).subscribe(data=>{
          if(data["status"]=="success")
          {
            this.auth.setLoggedInStatus(true,susername)
            this.router.navigateByUrl("/adminpanel/dashboard/ratings")
          }
          else{
            this.snakbar.open("Invalid Username and password","",{ duration:2000 });
   
          }
      })
   }
  ngOnInit() {
  }

}
