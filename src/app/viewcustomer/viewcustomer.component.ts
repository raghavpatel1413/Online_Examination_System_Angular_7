import { CustomerDetailShowComponent } from './../customer-detail-show/customer-detail-show.component';
import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];


@Component({
  selector: 'csl-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.scss']
})
export class ViewcustomerComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol','action'];
  datarecords = []
  public name = "";
  dataSource:MatTableDataSource<any>;

  constructor(public dbs:DbserviceService,public mydialog:MatDialog) {
    dbs.getConfig(Globals.url+"/customer/show").subscribe(data=>{
         
        var lstcust = Array();
        for(var i in data)
         {
           let x = {
            name:data[i]["custname"],
            address1:data[i]["custaddress1"],
            address2:data[i]["custaddress2"],
            city:data[i]["city"],
            email:data[i]["email"],
            language:data[i]["language"],
            website:data[i]["website"],
            contactno:data[i]["contactno"],
            country:data[i]["country"]
          }
          lstcust.push(x)
         }
         this.datarecords = lstcust;
         
        this.dataSource = new MatTableDataSource(this.datarecords)
    });

   }

  ngOnInit() {
  }

  searchcust()
  {
    this.dbs.getConfig(Globals.url+"/customer/showcustomer?name="+this.name).subscribe(data=>{
         
      var lstcust = Array();
      for(var i in data)
       {
         let x = {
          name:data[i]["custname"],
          address1:data[i]["custaddress1"],
          address2:data[i]["custaddress2"],
          city:data[i]["city"],
          email:data[i]["email"],
          language:data[i]["language"],
          website:data[i]["website"],
          contactno:data[i]["contactno"],
          country:data[i]["country"]
        }
        lstcust.push(x)
       }
       this.datarecords = lstcust;
       
      this.dataSource = new MatTableDataSource(this.datarecords)
  });

  }

  view(index)
  {
    this.mydialog.open(CustomerDetailShowComponent,{
      data:{
        customer:this.datarecords[index]
      }
    })
  }

}
