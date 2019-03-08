import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailysubjectdisplayPage } from './dailysubjectdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: DailysubjectdisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailysubjectdisplayPage]
})
export class DailysubjectdisplayPageModule {}
