import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PalindromePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-palindrome',
  templateUrl: 'palindrome.html',
})
export class PalindromePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PalindromePage');
  }

  palindrome() {
    var str = (<HTMLInputElement>document.getElementById('input')).value;
    var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  if (reverseStr === lowRegStr) {
    document.getElementById('result').innerHTML = 'true';
  }
  else {
    document.getElementById('result').innerHTML = 'false';
  }
  }
}
