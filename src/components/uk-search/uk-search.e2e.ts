import { newE2EPage } from '@stencil/core/testing';

describe('uk-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-search></uk-search>');

    const element = await page.find('uk-search');
    expect(element).toHaveClass('hydrated');
  });
});
