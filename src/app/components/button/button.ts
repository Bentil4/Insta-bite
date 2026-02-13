import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  host: {
    class: 'inline-block',
  },
  template: `
    <button [type]="type()" [class]="computeButtonClasses()">
      <ng-content />
    </button>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      border: none;
      transition:
        background-color 0.2s ease,
        color 0.2s ease;
    }

    button:focus-visible {
      outline: 2px solid var(--color-accent-orange);
      outline-offset: 2px;
    }

    .btn-primary {
      background-color: var(--color-primary-dark);
      color: var(--color-white);
    }

    .btn-primary:hover {
      background-color: #1e4d45;
    }

    .btn-secondary {
      background-color: var(--color-white);
      color: var(--color-primary-dark);
    }

    .btn-secondary:hover {
      background-color: #f5f5f5;
    }

    .btn-default {
      padding: 12px 16px;
      font-size: 18px;
    }

    .btn-large {
      padding: 16px 32px;
      font-size: 20px;
    }
  `,
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
