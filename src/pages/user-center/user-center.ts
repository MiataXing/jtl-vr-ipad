import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Userdata } from '../../viewmodels/UserData';
import { Lang } from '../../lang/lang';
import { UserCenterRouteList } from '../../util/constant-util';
import { GlobalProvider } from '../../providers/global/global';
import { SideMenuRouteList } from '../../util/constant-util';
import { HomePage } from '../home/home';

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
  sideMenuList: Array<any> = [...SideMenuRouteList];

  constructor(public navCtrl: NavController,
    public appCtrl: App,
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

  hideSideMenu() {
    let naveCtrl:NavController = this.appCtrl.getActiveNav();
    // debugger;
    console.log(naveCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserCenterPage');
    let ins = GlobalProvider.getInstance();
    GlobalProvider.setInstancePropertyVal('visibleFlag', false);
    console.log(ins.visibleFlag);
  }

}
