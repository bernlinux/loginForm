import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }
  goSignup(){
    this.navCtrl.push(SignupPage);
  }

}
