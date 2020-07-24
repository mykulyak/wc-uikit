import { newE2EPage } from '@stencil/core/testing';

describe('uk-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-image></uk-image>');

    const element = await page.find('uk-image');
    expect(element).toHaveClass('hydrated');
  });
});
