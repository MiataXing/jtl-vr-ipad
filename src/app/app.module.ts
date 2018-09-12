import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { HttpService } from '../provider/http-provider/http-provider';
import { UserService } from '../provider/routers/user';
import { CourseService } from '../provider/routers/course';
import { HomepageService } from '../provider/routers/homepage';

import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  declarations: [
    MyApp,
    HomePage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    UserService,
    CourseService,
    HomepageService,
    GlobalProvider
  ]
})
export class AppModule {}
