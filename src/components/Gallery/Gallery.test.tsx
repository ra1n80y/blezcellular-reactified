import { render, screen } from '../../test/render';
import userEvent from '@testing-library/user-event';
import Gallery from './Gallery';
import { describe, expect, it } from 'vitest';

describe('Gallery', () => {
  it('opens the lightbox when clicking a thumbnail', async () => {
    render(<Gallery />);
    // Gallery should initially have no lightbox img (caption not visible)
    expect(
      screen.queryByText('Inventory shelf as well as pending repairs'),
    ).not.toBeInTheDocument();

    // Click the first thumbnail
    const firstThumb = screen.getAllByRole('img')[0]; // gallery images
    await userEvent.click(firstThumb);

    // Lightbox caption appears
    expect(screen.getByText('Inventory shelf as well as pending repairs')).toBeInTheDocument();
  });

  it('closes the lightbox when clicking the backdrop', async () => {
    render(<Gallery />);
    const thumb = screen.getAllByRole('img')[0];
    await userEvent.click(thumb); // open

    // Click the backdrop (we can click the caption area as it will now close on any click)
    const caption = screen.getByText('Inventory shelf as well as pending repairs');
    await userEvent.click(caption);

    // Lightbox caption is gone
    expect(
      screen.queryByText('Inventory shelf as well as pending repairs'),
    ).not.toBeInTheDocument();
  });
});
