import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { MatBottomSheet } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'csl-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {

  public name;
  public roles;
  public checkboxroles:any[];
  constructor(public db:DbserviceService,private bottomsheet:MatBottomSheet) {
   
    db.getConfig(Globals.url+"/privillages").subscribe(data=>{
        var lst = Array()
        var i
        for(i in data)
        {
           let x = {
             _id:data[i]["_id"],
             pname:data[i]["pname"],
             checked:false
           }
           lst.push(x)
        }
        this.roles = lst
    });
  }

  ngOnInit() {
  }
  showoption(event,index)
  {
    this.roles[index].checked=event.checked

  }
  save()
  {
    let lst = Array()
    for(var i in this.roles)
    {
        if(this.roles[i].checked==true)
        {
          lst.push({
            _id:this.roles[i]._id
          })
        }
    }
    let name = this.name
    this.bottomsheet.open(AlertpanelComponent,{
      data:{
        message:"Do you want to Confirm?",
        api:Globals.url+"/roles/add",
        data:{
          privillages:lst,
          name:this.name
        },
        ok:"Confirm",
        cancel:"not Confirm"
      }
    })

  }

}

export interface checkbox{
  id:String,
  name:String,
  checked:Boolean
}