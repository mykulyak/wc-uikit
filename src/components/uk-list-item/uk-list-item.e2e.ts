import { newE2EPage } from '@stencil/core/testing';

describe('uk-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-list-item></uk-list-item>');

    const element = await page.find('uk-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
