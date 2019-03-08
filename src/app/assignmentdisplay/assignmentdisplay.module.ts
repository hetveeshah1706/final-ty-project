import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignmentdisplayPage } from './assignmentdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: AssignmentdisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignmentdisplayPage]
})
export class AssignmentdisplayPageModule {}
