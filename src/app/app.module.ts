import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HashLocationStrategy, LocationStrategy, DatePipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { MenuComponent } from 'src/app/client/orderpizza/menuelems/menu/menu.component';
import { EditmenuComponent } from 'src/app/admin/editmenu/editmenu/editmenu.component';
import { DisplaypizzaComponent } from 'src/app/client/orderpizza/menuelems/menuparts/displaypizza/displaypizza.component';
import { DisplaydrinkComponent } from 'src/app/client/orderpizza/menuelems/menuparts/displaydrink/displaydrink.component';
import { DisplaytopingComponent } from 'src/app/client/orderpizza/menuelems/menuparts/displaytoping/displaytoping.component';
import { DisplaysizepriceComponent } from 'src/app/client/orderpizza/menuelems/menuparts/displaysizeprice/displaysizeprice.component';
import { DisplaypizzaeditableComponent } from 'src/app/admin/editmenu/menuelemseditable/displaypizzaeditable/displaypizzaeditable.component';
import { DisplaysizepriceeditableComponent } from 'src/app/admin/editmenu/menuelemseditable/displaysizepriceeditable/displaysizepriceeditable.component';
import { DisplaytopingeditableComponent } from 'src/app/admin/editmenu/menuelemseditable/displaytopingeditable/displaytopingeditable.component';
import { DisplaydrinkeditableComponent } from 'src/app/admin/editmenu/menuelemseditable/displaydrinkeditable/displaydrinkeditable.component';
import { OpenhourseditableComponent } from 'src/app/admin/openhours/openhourseditable/openhourseditable.component';
import { ManageopenhoursComponent } from 'src/app/admin/openhours/manageopenhours/manageopenhours.component';
import { WritedeladrComponent } from 'src/app/client/orderpizza/writedeladr/writedeladr.component';
import { PlaceorderComponent } from 'src/app/client/orderpizza/placeorder/placeorder.component';
import { WorkerpanelComponent } from 'src/app/worker/workerpanel/workerpanel.component';
import { OrderdetailsComponent } from 'src/app/worker/orderdetails/orderdetails.component';
import { OrderinlistComponent } from 'src/app/worker/orderinlist/orderinlist.component';
import { DisplayaddresssComponent } from 'src/app/user/displayaddresss/displayaddresss.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { RegisternormaluserComponent } from 'src/app/user/register/registernormaluser/registernormaluser.component';
import { RegisterworkerComponent } from 'src/app/user/register/registerworker/registerworker.component';
import { RegisteradminComponent } from 'src/app/user/register/registeradmin/registeradmin.component';
import { WelcomepageComponent } from 'src/app/client/welcomepage/welcomepage/welcomepage.component';
import { AppmenubarComponent } from 'src/app/util/components/appmenubar/appmenubar.component';
import { DisplaypizzaorderComponent } from 'src/app/worker/displayorders/displaypizzaorder/displaypizzaorder.component';
import { DisplaytopingorderComponent } from 'src/app/worker/displayorders/displaytopingorder/displaytopingorder.component';
import { DisplaydrinkorderComponent } from 'src/app/worker/displayorders/displaydrinkorder/displaydrinkorder.component';
import { VieordershistoryComponent } from 'src/app/admin/vieordershistory/vieordershistory.component';
import { MyordersComponent } from 'src/app/user/myaccount/myorders/myorders.component';
import { MyaccountComponent } from 'src/app/user/myaccount/myaccount/myaccount.component';
import { AdminpanelComponent } from 'src/app/admin/adminpanel/adminpanel.component';
import { MydataComponent } from 'src/app/user/myaccount/mydata/mydata.component';
import { RestorepasswordComponent } from 'src/app/user/login/restorepassword/restorepassword.component';
import { ContactformComponent } from 'src/app/client/welcomepage/contactform/contactform.component';


const routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'editopenhours', component: ManageopenhoursComponent },
  { path: 'editmenu', component: EditmenuComponent },
  { path: 'writedeladr', component: WritedeladrComponent },
  { path: 'placeorder', component: PlaceorderComponent },
  { path: 'workerpanel', component: WorkerpanelComponent },
  { path: 'orderdetails/:id', component: OrderdetailsComponent },
  { path: 'login/:type/:after', component: LoginComponent },
  { path: 'login/:type', component: LoginComponent },
  { path: 'registernormaluser/:after', component: RegisternormaluserComponent },
  { path: 'registerworker/:after', component: RegisterworkerComponent },
  { path: 'registerworkeronly', component: RegisterworkerComponent },
  { path: 'registeradmin/:after', component: RegisteradminComponent },
  { path: 'registeradminonly', component: RegisteradminComponent },
  { path: 'ordershistory', component: VieordershistoryComponent },
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'mydata', component: MydataComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'adminpanel', component: AdminpanelComponent },
  { path: 'restorepassword/:type', component: RestorepasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EditmenuComponent,
    DisplaypizzaComponent,
    DisplaydrinkComponent,
    DisplaytopingComponent,
    DisplaysizepriceComponent,
    DisplaypizzaeditableComponent,
    DisplaysizepriceeditableComponent,
    DisplaytopingeditableComponent,
    DisplaydrinkeditableComponent,
    OpenhourseditableComponent,
    ManageopenhoursComponent,
    WritedeladrComponent,
    PlaceorderComponent,
    WorkerpanelComponent,
    OrderdetailsComponent,
    OrderinlistComponent,
    DisplayaddresssComponent,
    LoginComponent,
    RegisternormaluserComponent,
    RegisterworkerComponent,
    RegisteradminComponent,
    WelcomepageComponent,
    AppmenubarComponent,
    DisplaypizzaorderComponent,
    DisplaytopingorderComponent,
    DisplaydrinkorderComponent,
    VieordershistoryComponent,
    MyordersComponent,
    MyaccountComponent,
    AdminpanelComponent,
    MydataComponent,
    RestorepasswordComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatExpansionModule,
    MatTabsModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
