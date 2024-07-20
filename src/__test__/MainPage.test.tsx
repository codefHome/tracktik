import { render,screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ListDetail from '../pages/ListDetail';
import { vi, describe, beforeEach } from 'vitest';
// import { SearchFieldProps } from '@components/SearchField';
import { ListCardProps } from '@components/ListCard';
import SearchField, { SearchFieldProps } from '@components/SearchField';
import { mockSearchProps } from './SearchField.test';

vi.mock('../components/SearchField', () => ({
  default: ({ onChange, value, placeHolder, icon }:SearchFieldProps) => (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      {icon}
    </div>
  ),
}));

vi.mock('../components/ListCard', () => ({
  default: ({ imageUrl, siteName, siteAddress, siteContact, handleNavigation }:ListCardProps) => (
    <div>
      <img src={imageUrl} alt={siteName} />
      <h3>{siteName}</h3>
      <p>{siteAddress}</p>
      <p>{siteContact}</p>
      <button onClick={() =>handleNavigation('')}>Navigate</button>
    </div>
  ),
}));

vi.mock('../hooks/useMainPage', () => ({
  useMainPage: () => ({
    data: {
      data: [
        {
          id: '1',
          title: 'Site 1',
          images: ['image1.jpg'],
          address: { city: 'City 1' },
          contacts: { main: { phoneNumber: '123-456-7890' } },
        },
      ],
      totalPages: 1,
    },
    isLoading: false,
    isSuccess: true,
    searchQuery: '',
    filterQuery: '',
    isSearchVisible: false,
    isFilterVisible: false,
    page: 1,
    onChange: vi.fn(),
    handleFilter: vi.fn(),
    handleSearchVisibility: vi.fn(),
    handleFilterVisibility: vi.fn(),
    handlePageChange: vi.fn(),
    handleNavigation: vi.fn(),
  }),
}));

describe('MainPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders data correctly when loading is complete', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list-detail-view" element={<ListDetail />} />
        </Routes>
      </BrowserRouter>
    );
const siteElment = screen.getByText("Site list");
expect(siteElment).toBeInTheDocument();
  });
  test("renders Seaerch field", () => {
    render(<SearchField {...mockSearchProps} />);
  });
 
});
