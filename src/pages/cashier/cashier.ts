import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CashierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cashier',
  templateUrl: 'cashier.html',
})
export class CashierPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CashierPage');
  }
  cashRegister() {
    var beer = (<HTMLInputElement>document.getElementById('beer')).checked;
    var wine = (<HTMLInputElement>document.getElementById('wine')).checked;
    var umbrella = (<HTMLInputElement>document.getElementById('umbrella')).checked;
    var beeramt = 0;
    var wineamount = 0;
    var umbrellaamount = 0;
    if (beer === true) {
      beeramt = 2
    };
    if (wine === true) {
      wineamount = 3
    };
    if (umbrella === true) {
      umbrellaamount = 7
    };
    var total = beeramt + wineamount + umbrellaamount;
    var cash = (<HTMLInputElement>document.getElementById('cashInput')).valueAsNumber;
    console.log(total);
    if (cash >= total) {
      var change = document.getElementById('change');
      var changeAsNumber = cash - total;
      var changeToString = changeAsNumber + "";
      change.innerHTML = changeToString;
    }
    else {
      document.getElementById('change').innerHTML = 'Insufficient Funds'
    }
  }
}
