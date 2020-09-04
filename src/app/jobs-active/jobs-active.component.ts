import { DisplayinfoactiveComponent } from './../displayinfoactive/displayinfoactive.component';
import { Globals } from './../global';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csl-jobs-active',
  templateUrl: './jobs-active.component.html',
  styleUrls: ['./jobs-active.component.scss']
})
export class JobsActiveComponent implements OnInit {
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
    this.dbs.getConfig(Globals.url+"/job/getJobByStatus?id=0").subscribe(data=>{
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
