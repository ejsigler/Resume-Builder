import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CashierPage } from '../cashier/cashier';
import { NumbersPage } from '../numbers/numbers';
import { PalindromePage } from '../palindrome/palindrome';
import { PhonePage } from '../phone/phone';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CashierPage;
  tab5Root = NumbersPage;
  tab6Root = PalindromePage;
  tab7Root = PhonePage;

  constructor() {

  }
}
