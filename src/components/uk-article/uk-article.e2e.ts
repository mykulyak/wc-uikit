import { newE2EPage } from '@stencil/core/testing';

describe('uk-article', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-article></uk-article>');

    const element = await page.find('uk-article');
    expect(element).toHaveClass('hydrated');
  });
});
