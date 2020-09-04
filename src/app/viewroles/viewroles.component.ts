import { RoleseditComponent } from './../rolesedit/rolesedit.component';
import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatBottomSheet, MatDialog, MatDialogRef } from '../../../node_modules/@angular/material';
import { AlertpanelComponent } from '../alertpanel/alertpanel.component';

@Component({
  selector: 'csl-viewroles',
  templateUrl: './viewroles.component.html',
  styleUrls: ['./viewroles.component.scss']
})
export class ViewrolesComponent implements OnInit {

  dataFields=["name","privillages","actions"];
  dataSource:MatTableDataSource<any>
  table = []
  constructor(private dbs:DbserviceService,private matbar:MatBottomSheet,private al:MatDialog) { 
    this.databind()
  }

  ngOnInit() {
  }
  databind()
  {
    this.dbs.getConfig(Globals.url+"/roles").subscribe(data=>{
      let lst = Array()
      for(var i in data)
      {
          lst.push(data[i])
      }
      this.dataSource = new MatTableDataSource(lst)
      
      this.table = lst;
    })
  }
  delete(ind){
      this.matbar.open(AlertpanelComponent,{
        data:{
            message:"Do You want to Confirm ?",
            ok:"Confirm",
            cancel:"Cancel",
            api:Globals.url+"/roles/remove?id="+this.table[ind]._id,
            data:{
            }
        }
      }).afterDismissed().subscribe(()=>{
        this.databind()
      });
  }
  edit(ind){
    let dialogref = this.al.open(RoleseditComponent,{
        minHeight:"400px",
        width:"800px",
        data:this.table[ind]
    }).afterClosed().subscribe(()=>{
      this.databind()
    })
  }
}
