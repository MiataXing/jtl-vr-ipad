import { Component } from '@angular/core';
import { SideMenuRouteList } from '../../util/constant-util';

/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  text: string;
  sideMenuList: Array<any> = {...SideMenuRouteList};

  constructor() {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
  }

}
