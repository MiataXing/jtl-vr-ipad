import { Component } from '@angular/core';

/**
 * Generated class for the BackBtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-btn',
  templateUrl: 'back-btn.html'
})
export class BackBtnComponent {

  text: string;

  constructor() {
    console.log('Hello BackBtnComponent Component');
    this.text = 'Hello World';
  }

}
