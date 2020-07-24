import { newE2EPage } from '@stencil/core/testing';

describe('uk-article-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-article-title></uk-article-title>');

    const element = await page.find('uk-article-title');
    expect(element).toHaveClass('hydrated');
  });
});
