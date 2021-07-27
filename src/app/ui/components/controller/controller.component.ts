import { Component, Input } from '@angular/core';

export enum ControllerType {
  left = 'left',
  right = 'right',
}

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent {
  ControllerType = ControllerType;
  @Input() type: ControllerType = ControllerType.left;
}
