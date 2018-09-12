import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  private static instance: GlobalProvider;
  text: string = '';
  attr: string = '';
  visibleFlag: boolean;

  constructor() {
    console.log('Hello GlobalProvider Provider');
    this.text = '';
    this.attr = '';
    this.visibleFlag = true;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new this();
    }
    return this.instance;
  }

  public static setInstancePropertyVal(key: string, val: any) {
    if (this.instance[key] !== undefined) {
      this.instance[key] = val;
    }
  }

}
