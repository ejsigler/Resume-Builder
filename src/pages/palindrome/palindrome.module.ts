import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalindromePage } from './palindrome';

@NgModule({
  declarations: [
    PalindromePage,
  ],
  imports: [
    IonicPageModule.forChild(PalindromePage),
  ],
})
export class PalindromePageModule {}
