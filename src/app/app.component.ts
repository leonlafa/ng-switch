import { Component } from '@angular/core';
import { ControllerOrientation } from './ui/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ControllerOrientation = ControllerOrientation;
}
