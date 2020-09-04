import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { MatSnackBar } from '@angular/material';

interface Customer{
  name:String
}

@Injectable({
  providedIn: 'root'
})

export class DbserviceService {
  configUrl = 'assets/config.json';
  public c:Customer
  constructor(public httpclient:HttpClient,public snakbar:MatSnackBar) { }
  
  getConfig(url) {
    this.httpclient.get(url).subscribe(obs=>{},error=>{
      this.snakbar.open("Server Is Busy","Not Done",{ duration:2000 });
      
    })

    return this.httpclient.get(url)
  }
  postConfig(url,obj)
  {
  
    return this.httpclient.post(url,obj).subscribe(data=>{
      if(data["status"]=="success")
      {
 
        this.snakbar.open("Operation Successfull","Done",{ duration:2000 });
      }
      else{

        this.snakbar.open("Operation Failed","Done",{ duration:2000 });
      }
    },error=>{

      this.snakbar.open("Server Is Busy","Not Done",{ duration:2000 });
      
    });
  }
  postGet(url)
    {
      return this.httpclient.post(url,null)
    }
}
