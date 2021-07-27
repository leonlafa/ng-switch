import { Component, Input } from '@angular/core';

export enum ControllerOrientation {
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent {
  ControllerOrientation = ControllerOrientation;
  @Input() orientation: ControllerOrientation = ControllerOrientation.left;
}
