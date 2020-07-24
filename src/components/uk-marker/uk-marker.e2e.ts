import { newE2EPage } from '@stencil/core/testing';

describe('uk-marker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-marker></uk-marker>');

    const element = await page.find('uk-marker');
    expect(element).toHaveClass('hydrated');
  });
});
