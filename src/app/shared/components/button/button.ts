import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],

  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly size = input<'default' | 'large'>('default');
  readonly type = input<'button' | 'submit'>('button');

  protected computeButtonClasses(): string {
    const variantClassName = this.variant() === 'primary' ? 'btn-primary' : 'btn-secondary';
    const sizeClassName = this.size() === 'large' ? 'btn-large' : 'btn-default';
    return `${variantClassName} ${sizeClassName}`;
  }
}
