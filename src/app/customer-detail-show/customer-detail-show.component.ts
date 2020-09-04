import { Component, OnInit, Inject } from '@angular/core';
import { Data } from '../../../node_modules/@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'csl-customer-detail-show',
  templateUrl: './customer-detail-show.component.html',
  styleUrls: ['./customer-detail-show.component.scss']
})
export class CustomerDetailShowComponent implements OnInit {

    public obj
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { 
        this.obj = data.customer
    }

  ngOnInit() {
  }

}
