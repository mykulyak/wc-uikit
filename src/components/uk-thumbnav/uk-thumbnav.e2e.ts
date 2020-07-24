import { newE2EPage } from '@stencil/core/testing';

describe('uk-thumbnav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-thumbnav></uk-thumbnav>');

    const element = await page.find('uk-thumbnav');
    expect(element).toHaveClass('hydrated');
  });
});
