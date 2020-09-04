import { DisplayinfoactiveComponent } from './../displayinfoactive/displayinfoactive.component';
import { Globals } from './../global';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csl-jobs-queue',
  templateUrl: './jobs-queue.component.html',
  styleUrls: ['./jobs-queue.component.scss']
})
export class JobsQueueComponent implements OnInit {

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
    this.dbs.getConfig(Globals.url+"/job/getJobByStatus?id=1").subscribe(data=>{
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
    this.dialog.open(DisplayinfoactiveComponent,{
      data:this.dataTable[index]
    }).afterClosed().subscribe(data=>{
        this.databind()
    })
  }
}
