import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { NavController } from 'ionic-angular';import {} from 'ionic-angular';

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

  @Input() sideMenuList: Array<any>;
  @Output() event = new EventEmitter();

  text: string;

  constructor() {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
  }

  singleMenuClickEve($ev, menuObj) {
    $ev.target.value = {...menuObj};
    // this.navController.push(menuObj.routePath);
    this.event.emit($ev.target);
  }

}
