import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginPageUrl: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public domSanitizer: DomSanitizer) {
      this.loginPageUrl = domSanitizer.bypassSecurityTrustResourceUrl(this.navParams.data.loginUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    console.log(document);
  }

  pageJumping() {}

}
