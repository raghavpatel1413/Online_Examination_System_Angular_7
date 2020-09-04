import { Globals } from './global';
import { AddquotationComponent } from './addquotation/addquotation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule,MatDivider,MatButtonModule,MatFormFieldModule,MatInputModule, MatDividerModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule, MatTableModule, MatTreeModule, MatOptionModule, MatSelectModule, MatRadioModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatCheckbox, MatCheckboxModule, MatMenuModule, MatBottomSheetModule, MatSnackBarModule } from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RatingsComponent } from './ratings/ratings.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CustomersComponent } from './customers/customers.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ImportcustomerComponent } from './importcustomer/importcustomer.component';
import { ViewquotationComponent } from './viewquotation/viewquotation.component';
import { UsersComponent } from './users/users.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserviewComponent } from './userview/userview.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { AddroleComponent } from './addrole/addrole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RawmaterialComponent } from './rawmaterial/rawmaterial.component';
import { RawaddComponent } from './rawadd/rawadd.component';
import { RawviewComponent } from './rawview/rawview.component';
import { AlertpanelComponent } from './alertpanel/alertpanel.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryAddComponent } from './inquiry-add/inquiry-add.component';
import { InquiryShowComponent } from './inquiry-show/inquiry-show.component';
import { ViewrolesComponent } from './viewroles/viewroles.component';
import { UsereditComponent } from './useredit/useredit.component';
import { RoleseditComponent } from './rolesedit/rolesedit.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { CalendarModule } from 'angular-calendar';
import { MeetupsetComponent } from './meetupset/meetupset.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ProductInventoryComponent } from './product-inventory/product-inventory.component';
import { RawMaterialInventoryComponent } from './raw-material-inventory/raw-material-inventory.component';
import { JobsOrderComponent } from './jobs-order/jobs-order.component';
import { DisplayinfoComponent } from './displayinfo/displayinfo.component';
import { DisplayinfoactiveComponent } from './displayinfoactive/displayinfoactive.component';
import { JobsActiveComponent } from './jobs-active/jobs-active.component';
import { JobsQueueComponent } from './jobs-queue/jobs-queue.component';
import { JobsCompleteComponent } from './jobs-complete/jobs-complete.component';
import { CustomerDetailShowComponent } from './customer-detail-show/customer-detail-show.component';

@NgModule({
  entryComponents:[
    AlertpanelComponent,
    UsereditComponent,
    RoleseditComponent,
    MeetupsetComponent,
    DisplayinfoComponent,
    DisplayinfoactiveComponent,
    CustomerDetailShowComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminpanelComponent,
    DashboardComponent,
    RatingsComponent,
    OverviewComponent,
    ProductComponent,
    ViewproductComponent,
    AddproductComponent,
    QuotationComponent,
    CustomersComponent,
    ViewcustomerComponent,
    AddcustomerComponent,
    ImportcustomerComponent,
    AddquotationComponent,
    ViewquotationComponent,
    UsersComponent,
    UseraddComponent,
    UserviewComponent,
    RolesComponent,
    AddroleComponent,
    RawmaterialComponent,
    RawaddComponent,
    RawviewComponent,
    AlertpanelComponent,
    InquiryComponent,
    InquiryAddComponent,
    InquiryShowComponent,
    ViewrolesComponent,
    UsereditComponent,
    RoleseditComponent,
    MeetupsComponent,
    MeetupsetComponent,
    ProductInventoryComponent,
    RawMaterialInventoryComponent,
    JobsOrderComponent,
    DisplayinfoComponent,
    DisplayinfoactiveComponent,
    JobsActiveComponent,
    JobsQueueComponent,
    JobsCompleteComponent,
    CustomerDetailShowComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    ChartsModule,
    AmazingTimePickerModule,
    MglTimelineModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatChipsModule,
    MatInputModule,
    MatTreeModule,
    MatBottomSheetModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {
      path:"",
      component:LoginComponent
    },
    {
      path:"adminpanel",
      component:AdminpanelComponent,
      children:[
        {
          path:"dashboard",
          component:DashboardComponent,
          children:[
            {
              path:"ratings",
              component:RatingsComponent
            },
            {
              path:"overview",
              component:OverviewComponent
            }
          ]
        },
        {
          path:"meetups",
          component:MeetupsComponent
        },
        {
          path:"inquiry",
          component:InquiryComponent,
          children:[{
            path:"add",
            component:InquiryAddComponent
          },
          {
            path:"show",
            component:InquiryShowComponent
          }
        ]
        },
        {
          path:"rawmaterial",
          component:RawmaterialComponent,
          children:[
            {
              path:"add",
              component:RawaddComponent
            },
            {
              path:"view",
              component:RawviewComponent
            }
          ]
        },  
    {
      path:"roles",
      component:RolesComponent,
      children:[{
        path:"addrole",
        component:AddroleComponent
      },
      {
        path:"viewrole",
        component:ViewrolesComponent
      }]
    },
        {
          path:"customers",
          component:CustomersComponent,
          children:[{
            path:"create",
            component:AddcustomerComponent
          },
          {
            path:"view",
            component:ViewcustomerComponent
          },
          {
            path:"import",
            component:ImportcustomerComponent
          }
        ]

        },
        {
            path:"quotation",
            component:QuotationComponent,
            children:[{
              path:"create",
              component:AddquotationComponent
            },
            {
              path:"view",
              component:ViewquotationComponent
            }]
          },
          {
              path:"users",
              component:UsersComponent,
              children:[{
                path:"create",
                component:UseraddComponent
              },
              {
                path:"view",
                component:UserviewComponent
              }
              
            ]
          },
        {
          path:"product",
          component:ProductComponent,
          children:[{
            path:"view",
            component:ViewproductComponent
          },
        {
          path:"add",
          component:AddproductComponent
        }]
        },
        
        {
          path:"job/orders",
          component:JobsOrderComponent
        },
        {
          path:"job/active",
          component:JobsActiveComponent
        },
        {
          path:"job/queue",
          component:JobsQueueComponent
        },
        {
          path:"job/complete",
          component:JobsCompleteComponent
        },
    {
      path:"inventory/product",
      component:ProductInventoryComponent
    },
    {
      path:"inventory/rawmaterial",
      component:RawMaterialInventoryComponent
    }
      ]
    },
    {
      path:"login",
      component:LoginComponent
   
    }
    ])
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
