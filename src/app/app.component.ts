import { Component } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SideMenuRouteList } from '../util/constant-util';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  sideMenuList: Array<any> = [...SideMenuRouteList];
  visibleFlag: boolean = true;

  constructor(public appCtrl : App,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  singleMenuClickEv(params) {
    let naveCtrl:NavController = this.appCtrl.getActiveNav(), pagePath = params.value.routePath;
    if (pagePath === 'HomePage') {
      naveCtrl.push(this.rootPage);
    } else {
      naveCtrl.push(pagePath);
    }
  }
}

