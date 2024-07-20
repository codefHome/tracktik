import { vi } from "vitest";

export const mockHandleNavigation = vi.fn();
export const mockProps = {
    imageUrl: 'https://via.placeholder.com/350x200.png?text=Site+Image',
    siteName: 'Test Site',
    siteAddress: '123 Test St',
    siteContact: 'test@example.com',
    id: '1',
    handleNavigation: mockHandleNavigation,
  };