import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumbersPage } from './numbers';

@NgModule({
  declarations: [
    NumbersPage,
  ],
  imports: [
    IonicPageModule.forChild(NumbersPage),
  ],
})
export class NumbersPageModule {}
