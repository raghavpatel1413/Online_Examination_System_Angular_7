import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csl-rawadd',
  templateUrl: './rawadd.component.html',
  styleUrls: ['./rawadd.component.scss']
})
export class RawaddComponent implements OnInit {

  public productname
  public uom
  public uc
  constructor(public dbs:DbserviceService) { }

  ngOnInit() {
  }
  save()
  {
    var  x = {
      name:this.productname,
      umeasure:this.uom,
      unitcost:this.uc
    };
    this.dbs.postConfig(Globals.url+"/rawmaterial/add",x);
  }
}
