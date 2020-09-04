import { DisplayinfoactiveComponent } from './../displayinfoactive/displayinfoactive.component';
import { Globals } from './../global';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csl-jobs-complete',
  templateUrl: './jobs-complete.component.html',
  styleUrls: ['./jobs-complete.component.scss']
})
export class JobsCompleteComponent implements OnInit {

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
    this.dbs.getConfig(Globals.url+"/job/getJobByStatus?id=2").subscribe(data=>{
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
