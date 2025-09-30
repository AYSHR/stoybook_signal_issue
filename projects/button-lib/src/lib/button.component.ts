import { Component, input, output } from '@angular/core';

export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'lib-button',
  template: `
    <button [type]="type()" [disabled]="disabled()" (click)="handleClick()">
      {{ label() }}
    </button>
  `,
})
export class ButtonComponent {
  type = input<ButtonType>('button');
  label = input<string>('Button');
  disabled = input<boolean>(false);
  size = input<'small' | 'medium' | 'large'>('medium');

  buttonClick = output();

  handleClick() {
    this.buttonClick.emit();
  }
}

