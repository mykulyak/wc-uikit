import { newE2EPage } from '@stencil/core/testing';

describe('uk-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-badge></uk-badge>');

    const element = await page.find('uk-badge');
    expect(element).toHaveClass('hydrated');
  });
});
