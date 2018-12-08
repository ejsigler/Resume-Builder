import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonePage');
  }
  telephoneCheck() {
    var str = (<HTMLInputElement>document.getElementById('phoneInput')).value;
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    var test = regex.test(str);
    if (test = true) {
      document.getElementById('phone').innerHTML = 'true';
    }
    else {
      document.getElementById('phone').innerHTML = 'false';
    };

 }
}
