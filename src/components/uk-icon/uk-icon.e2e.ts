import { newE2EPage } from '@stencil/core/testing';

describe('uk-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-icon></uk-icon>');

    const element = await page.find('uk-icon');
    expect(element).toHaveClass('hydrated');
  });
});
