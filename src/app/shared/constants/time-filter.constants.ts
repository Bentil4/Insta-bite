export interface FilterOption {
  value: number;
  label: string;
}

export const TIME_FILTER_OPTIONS: FilterOption[] = [
  { value: 0, label: '0 minutes' },
  { value: 5, label: '5 minutes' },
  { value: 10, label: '10 minutes' },
  { value: 15, label: '15 minutes' },
  { value: 20, label: '20 minutes' },
];
