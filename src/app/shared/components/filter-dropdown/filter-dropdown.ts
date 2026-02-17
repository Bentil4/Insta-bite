import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FilterOption } from '../../constants/time-filter.constants';

export type { FilterOption };

@Component({
  selector: 'app-filter-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'relative inline-block',
    '(document:click)': 'handleDocumentClick($event)',
  },
  templateUrl: './filter-dropdown.html',
  styleUrl: './filter-dropdown.css',
})
export class FilterDropdownComponent {
  readonly label = input.required<string>();
  readonly options = input.required<FilterOption[]>();
  readonly selectedValue = input<number | null>(null);
  readonly selectionChange = output<number | null>();

  protected readonly isDropdownOpen = signal(false);

  protected toggleDropdownVisibility(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen.update((isOpen) => !isOpen);
  }

  protected selectFilterOption(value: number): void {
    this.selectionChange.emit(value);
    this.isDropdownOpen.set(false);
  }

  protected clearFilterSelection(): void {
    this.selectionChange.emit(null);
    this.isDropdownOpen.set(false);
  }

  protected handleDocumentClick(event: Event): void {
    this.isDropdownOpen.set(false);
  }
}
