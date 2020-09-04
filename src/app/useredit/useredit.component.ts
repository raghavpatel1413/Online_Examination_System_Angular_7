import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent, MatBottomSheet } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Data } from '../../../node_modules/@angular/router';
import { MyError } from '../MyError';

@Component({
  selector: 'csl-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

matcher = new MyError();
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
  roles = []

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: Data,private dbs:DbserviceService,private bottomsheet:MatBottomSheet) {
      var index=-1;
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
          this.roleFormControl.setValue(this.data.role._id)
        
        
        let d:Date =new Date(data.dob)
        this.snameFormControl.setValue(data.name)
        this.dateofBirthFormControl.setValue(d)
        this.emailFormControl.setValue(data.username)
        this.addressFormControl.setValue(data.address)
        this.passwordFormControl.setValue(data.password)
        this.confpassFormControl.setValue(data.password)

     }

  ngOnInit() {
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.data.dob = event.target.value
  }
  save(){
      if(this.snameFormControl.valid && this.dateofBirthFormControl.valid && this.emailFormControl.valid && this.addressFormControl.valid && this.passwordFormControl.valid && this.roleFormControl.valid)
      {
      this.data.name = this.snameFormControl.value
      this.data.dob = this.dateofBirthFormControl.value
      this.data.username = this.emailFormControl.value
      this.data.address = this.addressFormControl.value
      this.data.password = this.passwordFormControl.value
      this.data.role = { "_id":this.roleFormControl.value }
      this.bottomsheet.open(AlertpanelComponent,{
        data:{
          message:"Do you want to Update ?",
          ok:"Confirm",
          cancel:"Cancel",
          data:this.data,
          api:Globals.url+"/user/add"
        }
      }).afterDismissed().subscribe(()=>{
        this.dialogRef.close()
        
      });
    }
  }
}
