import { newE2EPage } from '@stencil/core/testing';

describe('uk-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-nav></uk-nav>');

    const element = await page.find('uk-nav');
    expect(element).toHaveClass('hydrated');
  });
});
