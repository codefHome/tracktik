
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { vi, describe, it, expect } from 'vitest';

vi.mock('../components/Header', () => ({
  default: () => <header role="banner">Mock Header</header>,
}));

vi.mock('../pages/MainPage', () => ({
  default: () => <div>Main Page Content</div>,
}));

vi.mock('../pages/ListDetail', () => ({
  default: () => <div>List Detail Content</div>,
}));

describe('App', () => {
  it('renders Header and MainPage by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('navigates to ListDetail page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    window.history.pushState({}, 'ListDetail', '/list-detail-view');

  });
});
