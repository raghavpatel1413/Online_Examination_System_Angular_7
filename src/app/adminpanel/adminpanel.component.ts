import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})

export class AdminpanelComponent implements OnInit {

  user : String;
  iscollapse = true;
  constructor(public auth:AuthServiceService,public router:Router) {

   }

  ngOnInit() {
    if(this.auth.getLoggedInStatus()==false)
    {
      this.router.navigate(['login']);
    }
    this.user = this.auth.getUsername();
  }
  logout(){
    this.auth.setLoggedInStatus(false,"");
    this.router.navigate(['login']);
  }
  onActivate(e, outlet){
    window.scrollTo(0,0)
  }
}
