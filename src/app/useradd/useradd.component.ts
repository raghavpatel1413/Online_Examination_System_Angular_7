import { MatBottomSheet, MatDatepickerInputEvent, ErrorStateMatcher } from '@angular/material';
import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { AlertpanelComponent } from '../alertpanel/alertpanel.component';
import { FormControl, Validators, FormGroupDirective, NgForm } from '../../../node_modules/@angular/forms';
import { MyError } from '../MyError';



@Component({
  selector: 'csl-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.scss']
})
export class UseraddComponent implements OnInit {
   roles=[];
  private name:String;
  private address:String;
  private dob;
  private username:String;
  private password:String;
  private confpassword:String;
  private sid;

  emailFormControl = new FormControl('',[
      Validators.required,
      Validators.email
  ]);

  snameFormControl = new FormControl('',[
      Validators.required
  ]);

  roleFormControl = new FormControl('',[
    Validators.required
  ]);

  passwordFormControl = new FormControl('',[
    Validators.required
  ]);

  confpassFormControl = new FormControl('',[
    Validators.required
  ]);

  addressFormControl = new FormControl('',[
    Validators.required
  ]);

  dateofBirthFormControl = new FormControl('',[
    Validators.required
  ]);

  matcher = new MyError();
  constructor(public dbs:DbserviceService,private matsheetbottom:MatBottomSheet) {
    
    this.dbs.getConfig(Globals.url+"/roles")
    .subscribe(data=>{
      var i
      var lst=Array()

      for(i in data)
      {
        let x ={
          id:data[i]["_id"],
          name:data[i]["name"]
        }
        lst.push(x)
      }
      if(lst.length!=0)
      {
        this.roles = lst
      }
    });


   }

  ngOnInit() {
  }

  save(){
    if(this.emailFormControl.valid&&this.snameFormControl.valid &&this.addressFormControl.valid&&this.passwordFormControl.valid&&this.dateofBirthFormControl.valid&&this.roleFormControl.valid)
    {
    this.matsheetbottom.open(AlertpanelComponent,{
      data:{
        message:"Do you want to Add User?",
        api:Globals.url+"/user/add",
        data:{
          name:this.snameFormControl.value,
          address:this.addressFormControl.value,
          password:this.passwordFormControl.value,
          username:this.emailFormControl.value,
          dob:this.dateofBirthFormControl.value,
          role:{_id:this.roleFormControl.value}
        },
        ok:"Yes",
        cancel:"No"
      }
    })
  }
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.dob = event.value;
  }
}
