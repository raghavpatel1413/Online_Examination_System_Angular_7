import { AlertpanelComponent } from './../alertpanel/alertpanel.component';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { Globals } from '../global';

@Component({
  selector: 'csl-viewquotation',
  templateUrl: './viewquotation.component.html',
  styleUrls: ['./viewquotation.component.scss']
})
export class ViewquotationComponent implements OnInit {


  public displayLabels = ["custname","date","total","status","actions"]
  public dataSource:MatTableDataSource<any>
  constructor(public dbs:DbserviceService,public bottomsheet:MatBottomSheet) {
    this.databind();
   }

  ngOnInit() {
  }
  databind()
  {
    
    this.dbs.getConfig(Globals.url+"/quotation/show").subscribe(data=>{
      let lst =Array()
      for(var i in data)
      {
        data[i].tempstatus=data[i].status
        switch(data[i].status)
        {
          case 1:
          data[i].status="Pending";
          data[i].action="Approve";
          break;
          
          case 2:
          data[i].status="Checking";
          data[i].action="Checked";
          break;
          
          case 3:
          data[i].status="checked";
          data[i].action="Go For Job";
          break;

          case 4:
          data[i].status="Go for job";
          data[i].action="Go in job sequence";
          break;
          
          case 5:
          data[i].status="job completed";
          data[i].action="Mark as Completed";
          break;
        }
        lst.push(data[i])
      }
 
      this.dataSource = new MatTableDataSource(lst);
    });

  }
  openActionPanel(index,i)
  {
   
    this.bottomsheet.open(AlertpanelComponent,{ data:{
      message:"Do you want to Delete ?",
      api:Globals.url+"/quotation/remove",
      data:{
        quotationid:index
      },
      ok:"Remove",
      cancel:"Cancel"
    }}).afterDismissed().subscribe(result=>{
      if(result=="success")
      {
        this.databind();
      }
    })
  }
  openApprovePanel(action,i)
  {

    let data = this.dataSource.data
    data[i]["tempstatus"]++;
    data[i]["status"]=data[i]["tempstatus"]
    alert(data[i]["status"]);
    
    
    this.bottomsheet.open(AlertpanelComponent,{
      data:{
        message:"the Quotation is "+action+" ?",
        api:Globals.url+"/quotation/update",
        data:data[i],
        ok:action,
        cancel:"Cancel"
      }
    }).afterDismissed().subscribe(result=>{
      if(result=="success")
      {
        this.databind()
      }
    })
  }
}

