import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';

import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'csl-inquiry-add',
  templateUrl: './inquiry-add.component.html',
  styleUrls: ['./inquiry-add.component.scss']
})
export class InquiryAddComponent implements OnInit {

  public employees = []
  public formName = new FormControl("",Validators.required)
  public formDescription = new FormControl("",Validators.required)
  public customerid = new FormControl("",Validators.required)
 
  constructor(private dbs:DbserviceService) {

      this.dbs.getConfig(Globals.url+"/customer/show").subscribe(data=>{
          
          for(var i in data)
          {
              this.employees.push(data[i])
          }
      });

   }

  ngOnInit() {
  }
  save(){
    if(this.customerid.valid&&this.formDescription.valid)
    {
      
      this.dbs.postConfig(Globals.url+"/inquiry/add",{
        customer:{
          custid:this.customerid.value
        },
        description:this.formDescription.value,
        status:0
      })
    }
  }
}
