import { newE2EPage } from '@stencil/core/testing';

describe('uk-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-tab></uk-tab>');

    const element = await page.find('uk-tab');
    expect(element).toHaveClass('hydrated');
  });
});
