import { newE2EPage } from '@stencil/core/testing';

describe('uk-placeholder', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-placeholder></uk-placeholder>');

    const element = await page.find('uk-placeholder');
    expect(element).toHaveClass('hydrated');
  });
});
