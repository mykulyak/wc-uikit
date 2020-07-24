import { newE2EPage } from '@stencil/core/testing';

describe('uk-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-text></uk-text>');

    const element = await page.find('uk-text');
    expect(element).toHaveClass('hydrated');
  });
});
