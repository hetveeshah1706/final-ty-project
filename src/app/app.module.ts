import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy, IonInfiniteScroll } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NgCalendarModule } from "ionic2-calendar";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { routing } from '../../app_routing';
//import { routing } from "./app_routing";
import { MatInputModule,MatFormFieldControl,MatMenuModule, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule,MatSelectModule,MatOptionModule, MatIconModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
//import { HeaderPage } from './header/header.page';
//import { HeaderPage } from './header/header.page';
import { IonicStorageModule } from "@ionic/storage";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home1Component } from './home1/home1.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FileOpener } from "@ionic-native/file-opener/ngx";
//import { CalendarModule } from 'angular-calendar';
//import { FormsModule } from '@angular/forms';
//import { FlatpickrModule } from 'angularx-flatpickr';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//mport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
   
  ],
  entryComponents: [
    
  ],
  imports: [ 
    
   
    FormsModule,
    
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
   
    IonicModule.forRoot(),
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    
    MatCheckboxModule,
    MatRadioModule,
    //LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //CalendarModule.forRoot(),
    IonicStorageModule.forRoot(),
   
    BrowserAnimationsModule,
   
    LayoutModule
    
    //HeaderPage
    //HeaderPage
  ],
  providers: [
    StatusBar,
    FileOpener,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
