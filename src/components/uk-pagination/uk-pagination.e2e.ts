import { newE2EPage } from '@stencil/core/testing';

describe('uk-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-pagination></uk-pagination>');

    const element = await page.find('uk-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
