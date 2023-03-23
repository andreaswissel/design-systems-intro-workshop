import { Component, Input, OnInit } from '@angular/core';

export type ButtonType = 'primary' | 'secondary';

/**
 * This is the button component. It can be used to build clicky things!
 *
 * See [Figma reference](https://www.figma.com/file/X1JRLUCEp6JnoeKAxRPNeF/Angular-Architects-Design-Systems?node-id=1%3A3) for specifications.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'Button Label';
  @Input() public type: ButtonType = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
