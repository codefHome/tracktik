import { render, screen, fireEvent } from '@testing-library/react';
import ListCard from '../components/ListCard';
import { mockHandleNavigation, mockProps } from './mocks/mockListCardProps';
import { vi } from 'vitest';

vi.mock('src/assets/fallback.jpg', () => ({
    default: 'fallback.jpg',
  }));
describe('ListCard', () => {
  test('renders site details correctly', () => {
    render(<ListCard {...mockProps} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.imageUrl);

    const siteNameElement = screen.getByText(/Test Site/i);
    const siteAddressElement = screen.getByText(/123 Test St/i);
    const siteContactElement = screen.getByText(/test@example.com/i);

    expect(siteNameElement).toBeInTheDocument();
    expect(siteAddressElement).toBeInTheDocument();
    expect(siteContactElement).toBeInTheDocument();
  });

  test('calls handleNavigation on click', () => {
    render(<ListCard {...mockProps} />);

    const cardElement = screen.getByRole('img').closest('div');
    fireEvent.click(cardElement as HTMLDivElement);

    expect(mockHandleNavigation).toHaveBeenCalledWith(mockProps.id);
  });

  test('renders fallback image when imageUrl is not provided', () => {
    render(<ListCard {...mockProps} imageUrl='' />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src','');
  });

});


