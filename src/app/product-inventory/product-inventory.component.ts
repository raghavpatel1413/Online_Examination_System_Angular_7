import { MatTableDataSource } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'csl-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.scss']
})
export class ProductInventoryComponent implements OnInit {

  public datacolumns = ["ProductName","Quantity"]
  public dataTable = []
  public inventorySource
  constructor(private dbs:DbserviceService) {

    this.dbs.getConfig(Globals.url+"/products/get").subscribe(data=>{
      this.dataTable = []
      for(var i in data)
      {
        this.dataTable.push(data[i])
      }
      this.inventorySource  = new MatTableDataSource(this.dataTable)
    })

   }

  ngOnInit() {
  }

}
