import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Data } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'csl-displayinfoactive',
  templateUrl: './displayinfoactive.component.html',
  styleUrls: ['./displayinfoactive.component.scss']
})
export class DisplayinfoactiveComponent implements OnInit {

  public obj
  public job
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data,private dbs:DbserviceService,private bottomsheet:MatBottomSheet) { 

      this.job = data
      this.obj = data.quotation
    }

  ngOnInit() {
  }
  approve()
  {
    this.job.status=this.job.status+1
    this.dbs.postConfig(Globals.url+"/job/putinqueue",this.job)
    this.dialogRef.close()
  }

}
