import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from '../components/SearchField';
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from 'react';
import { vi } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockOnChange = vi.fn((event: ChangeEvent<HTMLInputElement>) => {});
export const mockSearchProps = {
  onChange: mockOnChange,
  value: 'test value',
  placeHolder: 'Search...',
  icon: <SearchIcon />,
};

describe('SearchField', () => {
  test('renders with correct value and placeholder', () => {
    render(<SearchField {...mockSearchProps} />);

    const inputElement = screen.getByPlaceholderText(/search.../i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(mockSearchProps.value);
  });

  test('calls onChange handler on input change', () => {
    render(<SearchField {...mockSearchProps} />);

    const inputElement = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({ value: 'test value' }),
    }));
  });

  test('renders with the correct icon', () => {
    render(<SearchField {...mockSearchProps} />);
    const iconElement = screen.getByTestId('SearchIcon');
    expect(iconElement).toBeInTheDocument();
  });
});
