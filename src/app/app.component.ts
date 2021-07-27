import { Component } from '@angular/core';
import { ControllerType } from './ui/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ControllerType = ControllerType;
}
