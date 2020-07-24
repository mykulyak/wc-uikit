import { newE2EPage } from '@stencil/core/testing';

describe('uk-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-link></uk-link>');

    const element = await page.find('uk-link');
    expect(element).toHaveClass('hydrated');
  });
});
