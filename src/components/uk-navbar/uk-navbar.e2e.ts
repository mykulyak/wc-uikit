import { newE2EPage } from '@stencil/core/testing';

describe('uk-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-navbar></uk-navbar>');

    const element = await page.find('uk-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
