import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemainingfeesPage } from './remainingfees.page';

const routes: Routes = [
  {
    path: '',
    component: RemainingfeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemainingfeesPage]
})
export class RemainingfeesPageModule {}
