import { newE2EPage } from '@stencil/core/testing';

describe('uk-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-list></uk-list>');

    const element = await page.find('uk-list');
    expect(element).toHaveClass('hydrated');
  });
});
