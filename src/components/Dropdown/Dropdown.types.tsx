export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  label?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}