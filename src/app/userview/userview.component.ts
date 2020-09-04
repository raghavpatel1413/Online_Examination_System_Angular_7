import { UsereditComponent } from './../useredit/useredit.component';
import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { MatTableDataSource, MatBottomSheet, MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { Globals } from '../global';

@Component({
  selector: 'csl-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  public dataSource:MatTableDataSource<any>
  public dataFields=["name","username","dob","role","address","action"];
  public table = []
  constructor(private dbs:DbserviceService,private matsheet:MatBottomSheet,private dialog:MatDialog) { 
    this.databind()
  }

  ngOnInit() {
  }
  databind()
  {
    this.dataSource = new MatTableDataSource(this.table)
    this.dbs.getConfig(Globals.url+"/user/getall").subscribe(data=>{
      let lst = Array()
      for(var i in data)
      {
        lst.push(data[i])
      }
      this.table = lst
      this.dataSource = new MatTableDataSource(lst)
    });
  }
  delete(ind)
  {
      this.matsheet.open(AlertpanelComponent,{
        data:{
          message:"Are you Sure want to Delete ?",
          api:Globals.url+"/user/remove?id="+this.table[ind].userid,
          data:{

          },
          ok:"Confirm",
          cancel:"Cancel"
        }
      }).afterDismissed().subscribe(()=>{
        this.databind();
      })
  }
  edit(ind)
  {
    let dialogRef = this.dialog.open(UsereditComponent, {
      height: '400px',
      width: '800px',
      data:this.table[ind]
    }).afterClosed().subscribe(()=>{
      this.databind()
    })

  }
}
