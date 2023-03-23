import { Component, Input } from '@angular/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
})
export class ButtonComponent {
  @Input() public label: string = 'Button Label';
  @Input() public type: ButtonType = 'primary';
}
