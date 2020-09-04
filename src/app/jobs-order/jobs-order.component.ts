import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '../../../node_modules/@angular/material';
import { DisplayinfoComponent } from '../displayinfo/displayinfo.component';

@Component({
  selector: 'csl-jobs-order',
  templateUrl: './jobs-order.component.html',
  styleUrls: ['./jobs-order.component.scss']
})
export class JobsOrderComponent implements OnInit {

  public datacolumns = ["JobID","CustomerName","Date","Action"]
  public workorderSource
  public dataTable
  constructor(private dbs:DbserviceService,private dialog:MatDialog) {

    this.databind()
   }
  ngOnInit() {
  }
  databind()
  {
    this.dbs.getConfig(Globals.url+"/job/getOrders").subscribe(data=>{
      this.dataTable = []
      for(var i in data)
      {
          this.dataTable.push(data[i]);
      }
      this.workorderSource=new MatTableDataSource(this.dataTable)
    })

  }
  save(index)
  {
    this.dialog.open(DisplayinfoComponent,{
      data:this.dataTable[index]
    }).afterClosed().subscribe(data=>{
        this.databind()
    })
  }
}
