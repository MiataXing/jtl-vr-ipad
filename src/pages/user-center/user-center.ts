import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Userdata } from '../../viewmodels/UserData';
import { Lang } from '../../lang/lang';
import { UserCenterRouteList } from '../../util/constant-util';

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
  userAvatarUrl: string = '';
  userData: Userdata;
  zhLang: object = {...Lang.zh};
  editInfoBtnText: string;
  userCenterRoutes: Array<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
      // this.initDefaultData();
  }

  initDefaultData() {
    this.userData = new Userdata('8a29571a-3f5b-4ba9-b007-d278e20aa503',
    'Miata', 'Miata',
    'http://www.moore8.com/m/assets/imgs/katana.jpg',
    'Web Developer', 10, 10, 10);
    this.userAvatarUrl = this.userData.AvatarUrl;
    this.editInfoBtnText = Lang.zh.usercenter.information;
    this.userCenterRoutes = [...UserCenterRouteList];
  }
  
  linktoUserCenter(params) {}

  ionViewWillLoad() {
    this.initDefaultData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
  }

}
