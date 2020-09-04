import { MatTableDataSource } from '@angular/material';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'csl-raw-material-inventory',
  templateUrl: './raw-material-inventory.component.html',
  styleUrls: ['./raw-material-inventory.component.scss']
})
export class RawMaterialInventoryComponent implements OnInit {

  public datacolumns = ["MaterialName","Quantity","UnitOfMeasure"]
  public inventorySource
  public dataTable = []
  constructor(private dbs:DbserviceService) {

    this.dbs.getConfig(Globals.url+"/rawmaterialinv/get").subscribe(data=>{
        this.dataTable = []
        for(var i in data)
        {
          this.dataTable.push(data[i])
        }
        this.inventorySource = new MatTableDataSource(this.dataTable)
    })

   }

  ngOnInit() {
  }

}
