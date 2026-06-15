import { render, screen } from '../../test/render';
import ServiceCard from './ServiceCard';
import { describe, expect, it } from 'vitest';

const defaultProps = {
  icon: '/icons/repair.svg',
  alt: 'Repair',
  title: 'Cellphone Repair',
  description: 'Fast and reliable repairs.',
};

describe('ServiceCard', () => {
  it('renders the title and description', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Cellphone Repair')).toBeInTheDocument();
    expect(screen.getByText('Fast and reliable repairs.')).toBeInTheDocument();
  });

  it('renders the icon with correct alt text', () => {
    render(<ServiceCard {...defaultProps} />);
    const img = screen.getByAltText('Repair');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/icons/repair.svg');
  });
});
