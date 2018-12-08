import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CashierPage } from './cashier';

@NgModule({
  declarations: [
    CashierPage,
  ],
  imports: [
    IonicPageModule.forChild(CashierPage),
  ],
})
export class CashierPageModule {}
