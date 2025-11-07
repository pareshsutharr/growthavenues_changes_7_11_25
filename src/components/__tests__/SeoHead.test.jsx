import { render } from "@testing-library/react";
import SeoHead from "../SeoHead";

describe('SeoHead', () => {
  it('sets title and meta description', () => {
    const title = 'Test Title';
    const desc = 'Test description';
    render(<SeoHead title={title} description={desc} canonical="/" og={{}} twitter={{}} />);
    expect(document.title).toBe(title);
    const meta = document.querySelector('meta[name="description"]');
    expect(meta?.getAttribute('content')).toBe(desc);
  });
});

