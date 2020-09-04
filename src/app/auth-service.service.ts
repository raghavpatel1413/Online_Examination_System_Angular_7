import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public loggedInStatus :Boolean= true;
  public user:String = "";
  constructor() { 
    if(window.localStorage["user"]!=undefined)
    {
      this.user = window.localStorage["user"];
      this.loggedInStatus=true;
    }
  }
  setLoggedInStatus(status :Boolean,user:String)
  {
    this.loggedInStatus = status;
    this.user = user;
    window.localStorage["user"]=user;
  }
  getLoggedInStatus()
  {
    return this.loggedInStatus;
  }
  getUsername()
  {
    return this.user;
  }
}
