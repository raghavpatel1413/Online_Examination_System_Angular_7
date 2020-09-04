import { DbserviceService } from './../dbservice.service';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Component, OnInit, Injectable, Inject, ElementRef } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'csl-alertpanel',
  templateUrl: './alertpanel.component.html',
  styleUrls: ['./alertpanel.component.scss']
})
export class AlertpanelComponent implements OnInit {

  constructor(public alertsheet:MatBottomSheetRef<AlertpanelComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data:Data,public dbs:DbserviceService) { 
    
  }

  ngOnInit() {
  }
  remove()
  {
    if(this.data.data!=null)
    {
      this.dbs.postConfig(this.data.api,this.data.data)
    
    }
    this.alertsheet.dismiss('success')
  }
  cancel()
  {
    this.alertsheet.dismiss('fail')
  }
}
