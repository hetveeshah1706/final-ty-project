import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

import { IonicModule } from '@ionic/angular';

import { CalPage } from './cal.page';

const routes: Routes = [
  {
    path: '',
    component: CalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalPage]
})
export class CalPageModule {}
