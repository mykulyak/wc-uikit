import { newE2EPage } from '@stencil/core/testing';

describe('uk-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-divider></uk-divider>');

    const element = await page.find('uk-divider');
    expect(element).toHaveClass('hydrated');
  });
});
