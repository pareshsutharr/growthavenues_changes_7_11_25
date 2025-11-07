import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductServicesMenu from "../ProductServicesMenu";

describe('ProductServicesMenu', () => {
  it('renders MF link and disabled product items', () => {
    render(
      <MemoryRouter>
        <ProductServicesMenu open onClose={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Explore Mutual Funds/i })).toBeInTheDocument();
    const upcoming1 = screen.getByText(/3%/i).closest('[role="menuitem"]');
    const upcoming2 = screen.getByText(/11\/50/i).closest('[role="menuitem"]');
    expect(upcoming1).toHaveAttribute('aria-disabled', 'true');
    expect(upcoming2).toHaveAttribute('aria-disabled', 'true');

    // services row
    expect(screen.getByRole('menuitem', { name: /IPO/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Trading/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /^MF$/i })).toBeInTheDocument();
  });
});

