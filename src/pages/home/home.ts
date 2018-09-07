import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../provider/http-provider/http-provider';
import { UserService } from '../../provider/routers/user';
import { HomepageService } from '../../provider/routers/homepage';
import { Userdata } from '../../viewmodels/UserData';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultUserAvatarUrl: string = 'assets/icon/anonymous.jpg';
  loginUrl: string = "";
  userAvatarUrl: string = '';
  hotCategory: string = '';
  homepageData: any = {};
  userData: any = {};
  hotCategoryCourses: Array<any> = [];
  liveCourses: Array<any> = [];
  slidePics: Array<object> = [];

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public httpService: HttpService,
    public homepageService: HomepageService) {}

  jumpToLoginPage() {
    this.userService.jumpToLoginPage();
  }

  getUserData() {
    this.userService.getUserData().then(res => {
      console.log(res);
      if (res.code === 0) {
        this.setUserData(res);
      } else {
        this.resetUserData();
      }
    }).catch(err => {
      console.log(err);
    });
  }

  setUserData(res: any) {
    this.userData = {...res.data};
    this.userAvatarUrl = this.userData.avatar;
    UserService.loggedinStatus = true;
    UserService.currentUser = new Userdata('', this.userData.nick_name, this.userData.nick_name, this.userData.avatar, '', 0, 0, 0);
  }

  resetUserData() {
    this.userData = {};
    this.userAvatarUrl = this.defaultUserAvatarUrl;
    UserService.loggedinStatus = false;
    UserService.currentUser = new Userdata('', '', '', this.defaultUserAvatarUrl, '', 0, 0, 0);
  }

  linktoUserCenter(params) {
    if (!UserService.loggedinStatus) {
      this.jumpToLoginPage();
    } else {
      this.navCtrl.push('UserCenterPage');
    }
  }

  getHomepageData() {
    this.homepageService.getHomepageData().then(res => {
      console.log(res);
      this.homepageData = {...res.data};
      this.initHomepageData(this.homepageData);
    }).catch(err => {
      console.log(err);
    })
  }

  initHomepageData(data: any) {
    this.slidePics = [...data.ad_slideshow];
  }

  jumpToAdLink(url) {
    window.location.href = url;
  }

  ionViewWillEnter() {
    // this.getUserData();
    // this.getHomepageData();
  }
}
