import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() label: string = 'Input Label';
  @Input() placeholder: string = 'Input Placeholder';

  id: string;

  constructor() {
    this.id = crypto.randomUUID();
  }
}
