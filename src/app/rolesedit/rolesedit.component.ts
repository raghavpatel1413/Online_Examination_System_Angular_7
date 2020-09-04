import { Data } from '@angular/router';
import { MatBottomSheet, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { Globals } from './../global';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'csl-rolesedit',
  templateUrl: './rolesedit.component.html',
  styleUrls: ['./rolesedit.component.scss']
})
export class RoleseditComponent implements OnInit {


  public name;
  public roles;
  public checkboxroles:any[];
  constructor(public db:DbserviceService,private bottomsheet:MatBottomSheet,public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {
   
    db.getConfig(Globals.url+"/privillages").subscribe(data=>{
        var lst = Array()
        var i
        var items=[]
        for(i in this.data.privillages)
        {
          items[this.data.privillages[i]._id] = this.data.privillages[i].pname
        }
        for(i in data)
        {
          var c=false
          if(items[data[i]["_id"]] != null)
          {
              c=true
          }
          let x = {
             _id:data[i]["_id"],
             pname:data[i]["pname"],
             checked:c
           }
           
           
           lst.push(x)
        }
        this.roles = lst
        this.name = this.data.name
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
        message:"Do you want to Update?",
        api:Globals.url+"/roles/add",
        data:{
          _id:this.data._id,
          privillages:lst,
          name:this.name
        },
        ok:"Confirm",
        cancel:"not Confirm"
      }
    }).afterDismissed().subscribe(()=>{
      this.dialogRef.close()
    })

}
}
