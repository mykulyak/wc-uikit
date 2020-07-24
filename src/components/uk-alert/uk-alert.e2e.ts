import { newE2EPage } from '@stencil/core/testing';

describe('uk-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-alert></uk-alert>');

    const element = await page.find('uk-alert');
    expect(element).toHaveClass('hydrated');
  });
});
