import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  template: `<div class="ng-switch-screen">
    <i class="ng-switch-screen__notch"></i>
    <i class="ng-switch-screen__notch"></i>
    <div class="ng-switch-screen__reflections"></div>
    <div class="ng-switch-screen ng-switch-screen--inner"></div>
  </div>`,
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent {}
