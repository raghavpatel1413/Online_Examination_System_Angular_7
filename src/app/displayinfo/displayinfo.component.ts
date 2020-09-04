import { DbserviceService } from './../dbservice.service';
import { Data } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'csl-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.scss']
})
export class DisplayinfoComponent implements OnInit {

  public obj
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data,private dbs:DbserviceService,private bottomsheet:MatBottomSheet) { 

      this.obj = data
    }

  ngOnInit() {
  }
  approve()
  {
    this.obj.status=this.obj.status+1
    this.dbs.postConfig(Globals.url+"/job/approve",{
      status:0,
      quotation:this.obj 
    })
    this.dialogRef.close()
  }

}
