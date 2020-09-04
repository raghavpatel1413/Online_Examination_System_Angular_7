import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';
import { MatTableDataSource, MatBottomSheet, MatDialog } from '../../../node_modules/@angular/material';
import { MeetupsetComponent } from '../meetupset/meetupset.component';
import { AddcustomerComponent } from '../addcustomer/addcustomer.component';

@Component({
  selector: 'csl-inquiry-show',
  templateUrl: './inquiry-show.component.html',
  styleUrls: ['./inquiry-show.component.scss']
})
export class InquiryShowComponent implements OnInit {

  public datacolumns = ["Name","Description","Date","Action"]
  public inquirySource;
  public dataTable=[]
  constructor(private dbs:DbserviceService,private matbottom:MatBottomSheet,public dialog:MatDialog) {
     this.databind()
    }

  ngOnInit() {
  }
  MeetUp(id)
  {
    
    const dialogRef = this.dialog.open(MeetupsetComponent, {
      height: '90%',
      data:{ inquiry:this.dataTable[id] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    /*
    let obj = this.dataTable[id]
    obj.status = 1
    this.matbottom.open(AlertpanelComponent,{
      data:{
        message:"Do you want to Save Inquiry?",
        api:Globals.url+"/inquiry/add",
        data:obj,
        ok:"Yes",
        cancel:"No"
      }
    }).afterDismissed().subscribe(data=>{
      this.dat
      abind()
    })*/
  }
  databind()
  {
    this.dataTable = []
    this.dbs.getConfig(Globals.url+"/inquiry/get").subscribe(data=>{
      for(var i in data)
      {
          this.dataTable.push(data[i])
      }
      this.inquirySource = new MatTableDataSource(this.dataTable)
      
    })
  }
}