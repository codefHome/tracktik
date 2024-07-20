import { render, screen } from '@testing-library/react';
import ImageSlider from '../components/ImageSlider';
import { mockImages } from './mocks/mockImagesUrl'
describe('ImageSlider', () => {
  test('renders images correctly', () => {
    render(<ImageSlider images={mockImages} />);
    const imgElements = screen.getAllByAltText('site views');
    expect(imgElements).toHaveLength(mockImages.length);

    imgElements.forEach((imgElement, index) => {
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', mockImages[index]);
    });
  });

  test('renders without images', () => {
    render(<ImageSlider images={[]} />);
    const imgElement = screen.queryByAltText('site views');
    expect(imgElement).not.toBeInTheDocument();
  });
});
