import { DbserviceService } from './../dbservice.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { Time } from '../../../node_modules/@angular/common';
import { Validators, FormControl } from '../../../node_modules/@angular/forms';
import { Data } from '../../../node_modules/@angular/router';
import { Globals } from '../global';

@Component({
  selector: 'csl-meetupset',
  templateUrl: './meetupset.component.html',
  styleUrls: ['./meetupset.component.scss']
})
export class MeetupsetComponent implements OnInit {

  public picker
  public purdate:Date
  public meetuptime= new FormControl("",Validators.required)
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data,private dbs:DbserviceService) {

   }

  ngOnInit() {
  }

  save(){
    
    let d=this.purdate.toLocaleDateString()
    let time=this.meetuptime.value
    this.dbs.postConfig(Globals.url+"/meetup/add",{
      date:d+" "+time,
      inquiry:this.data.inquiry
    })
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.purdate = event.value;
    
  }
}
