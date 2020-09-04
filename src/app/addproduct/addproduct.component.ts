import { DbserviceService } from './../dbservice.service';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Globals } from '../global';

@Component({
  selector: 'csl-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  public mpname;
  public mpuom;
  public mpuqty;
  public mpref;
  public productname:String;
  public productQty;
  public uom:String;
  public uc;
  public total = 0;
  public subt;
  public product=[];
  public selectedmaterial;
  Labels = ["productname","productqty","uom","uc","st"];
  RawMaterials=[];

  ds = [];
  public dataSource;  
  constructor(public dbs:DbserviceService) { 
      this.dataSource = new MatTableDataSource(this.ds)
      this.dbs.getConfig(Globals.url+"/rawmaterial/show").subscribe(data=>{
        let x=[]
        for(var i in data)
        {
          let obj = {
            materialid:data[i]["materialid"],
            name:data[i]["name"],
            umeasure:data[i]["umeasure"],
            unitcost:data[i]["unitcost"]
          }
          x.push(obj)
        }
        this.RawMaterials = x;
      });
    }

  ngOnInit() {
  }
  addproduct()
  {

    alert(this.selectedmaterial);
    for(var i in this.RawMaterials)
    {
        if(this.RawMaterials[i]["materialid"]==this.selectedmaterial)
        {
            break;
        }
    }
    
    this.uc = this.RawMaterials[i]["unitcost"];
    this.subt = this.productQty *this.uc;
    var p = {
        qty:this.productQty,
        material:{
          materialid:this.RawMaterials[i]["materialid"],
          name:this.RawMaterials[i]["name"],
          umeasure:this.RawMaterials[i]["umeasure"],
          unitcost:this.RawMaterials[i]["unitcost"]
        },
        subtotal:this.subt
    };
    this.product.push(p);
    
    this.total = this.total + p.subtotal;
    
    this.RawMaterials.splice(Number.parseInt(i),1)
    this.productname=""
    this.productQty=""
    this.uc=""
    this.subt=""
    this.dataSource = new MatTableDataSource(this.product)
  }
  save()
  {
    console.log(this.product)
    var data = {
        productname:this.mpname,
        uom:this.mpuom,
        uqty:this.mpuqty,
        total:this.total,
        productref:this.mpref,
        bom:this.product
    };
    this.dbs.postConfig(Globals.url+"/billofmaterial/add",data);
  }
}
