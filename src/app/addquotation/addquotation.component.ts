import { DbserviceService } from './../dbservice.service';
import { AddcustomerComponent } from './../addcustomer/addcustomer.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDatepickerInputEvent } from '@angular/material';
import { Globals } from '../global';
@Component({
  selector: 'csl-addquotation',
  templateUrl: './addquotation.component.html',
  styleUrls: ['./addquotation.component.scss']
})
export class AddquotationComponent implements OnInit {
  static sno:number = 1;
  public customers = [
    {
      custname:'Customer 1',
      custid:1
    },
    {
      custname:'Customer 2',
      custid:2
    }
  ];
  quotaions:Quotation[] =[];
  materials:Material[] =[];
  dismaterials:Material[] = [];
  public customid:String;
  public datafields=["srno","matdescription","minqty","itemname","qty","rate","total","option"];
  public dt:MatTableDataSource<Quotation>
  public material:number
  public finaltotal = 0;
  public sqty:number=0;
  public product=[{
    billmaterialid:1,
    productname:"test"
  }]
  public sitem:string;
  
  public purdate:Date;
  constructor(public dialog:MatDialog,public dbs:DbserviceService) { 
    this.dt = new MatTableDataSource(this.quotaions);
    this.dismaterials = [ {id:1,materialname:"Spreadsheet"},{id:2,materialname:"Coton"}];
    dbs.getConfig(Globals.url+"/customer/show").subscribe(data=>{
        let lst = Array()
        for(var i in data)
        {
          let x = {
            custid:data[i]["custid"],
            custname:data[i]["custname"]
          }
          lst.push(x)
        }
        this.customers = lst
    });
    dbs.getConfig(Globals.url+"/billofmaterial/show").subscribe(data=>{
        let lst = Array()
        for(var i in data)
        {
          lst.push(data[i])
        }
        this.product = lst
    });
  }
  removeitem(index)
  {
    this.quotaions.splice(index,1);
    this.dt = new MatTableDataSource(this.quotaions);
    alert(index);

  }
  ngOnInit() {
  }
  addmaterial()
  {/*
    if(this.material!=-1)
    {
      if(this.materials.findIndex(this.dismaterials[this.material])!=-1)
      {
        alert("Already Added");
      }
      else{
        this.materials.push(this.dismaterials[this.material]);
        alert("Successfully Added");
      }
     
    }
    else
    {
      alert(this.material);

    }*/
    if(this.material!=undefined)
    {
      this.materials.push(this.dismaterials[this.material]);
    }
  }
  additem()
  {
     
     alert(this.sqty);
     var x:Quotation={srno:AddquotationComponent.sno,
          matdescription:"",
          minqty:"",
          materials:this.materials,
          item:this.product[this.sitem],
          qty:this.sqty,
          rate:this.product[this.sitem].total,
          total:this.product[this.sitem].total*this.sqty
        };
      this.finaltotal = this.finaltotal + x.total;
      this.quotaions.push(x);
      AddquotationComponent.sno++;
      this.materials = [];
      this.dt = new MatTableDataSource(this.quotaions);
      this.product.splice(Number(this.sitem),1)
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(AddcustomerComponent, {
      height: '90%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
    getqty(e)
    {
      this.sqty = e.target.value;
    }


    save()
    {
      
      alert(this.purdate);      
      let x={
        customer:{ custid:this.customid },
        total:this.finaltotal,
        quotations:this.quotaions,
        date:this.purdate,
        status:1
      };
      this.dbs.postConfig(Globals.url+"/quotation/add",x);
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.purdate = event.value;
    }
}


export interface Quotation{
  srno:number,
  matdescription:string,
  materials:Material[],
  minqty:string,
  item:any,
  qty:number,
  rate:number,
  total:number
}
export interface Material{
  id:number,
  materialname:string
}
 