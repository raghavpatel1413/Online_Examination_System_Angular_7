import { Globals } from './../global';
import { DbserviceService } from './../dbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'csl-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  custname:String
  custaddress1:String
  custaddress2:String
  city:String
  email:String
  country:String
  state:String
  type:String
  contactno:String
  website:String
  language:String


  constructor(public dbs:DbserviceService) {
    this.custaddress1=""
    this.custaddress2=""
    this.custname=""
    this.city=""
    this.email=""
    this.country=""
    this.email=""
    this.type=""
    this.state=""
    this.contactno=""
    this.website=""
    this.language=""
  }

  ngOnInit() {
  }
  save()
  {
    var x = {
      custname:this.custname,
      custaddress1:this.custaddress1,
      custaddress2:this.custaddress2,
      city:this.city,
      email:this.email,
      country:this.country,
      contactno:this.contactno,
      website:this.website,
      type:this.type,
      state:this.state
    };
    this.dbs.postConfig(Globals.url+"/customers/add",x);
  }
}
