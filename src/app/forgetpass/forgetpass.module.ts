import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { routing } from '../../app_routing';
//import { routing } from "./app_routing";
import { MatInputModule,MatFormFieldControl,MatMenuModule, MatPaginatorModule,MatProgressSpinnerModule, MatSortModule, MatCardModule,MatSelectModule,MatOptionModule, MatIconModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { ForgetpassPage } from './forgetpass.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetpassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
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
    RouterModule.forChild(routes)
  ],
  declarations: [ForgetpassPage]
})
export class ForgetpassPageModule {}
