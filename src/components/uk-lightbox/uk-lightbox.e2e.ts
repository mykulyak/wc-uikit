import { newE2EPage } from '@stencil/core/testing';

describe('uk-lightbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-lightbox></uk-lightbox>');

    const element = await page.find('uk-lightbox');
    expect(element).toHaveClass('hydrated');
  });
});
