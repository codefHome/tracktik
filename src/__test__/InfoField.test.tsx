import { render, screen } from '@testing-library/react';
import InfoField from '../components/InfoField';

describe('InfoField', () => {
  test('renders label and value correctly', () => {
    render(<InfoField label="Name" value="John Doe" />);
    const labelElement = screen.getByText('Name');
    const valueElement = screen.getByText('John Doe');
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test('renders without value', () => {
    render(<InfoField label="Name" />);
    const labelElement = screen.getByText('Name');
    const valueElement = screen.queryByText('John Doe');
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).not.toBeInTheDocument();
  });

  test('renders without label', () => {
    render(<InfoField value="John Doe" />);
    const valueElement = screen.getByText('John Doe');
    expect(valueElement).toBeInTheDocument();
  });
});
