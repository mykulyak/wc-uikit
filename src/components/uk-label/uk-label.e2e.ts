import { newE2EPage } from '@stencil/core/testing';

describe('uk-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-label></uk-label>');

    const element = await page.find('uk-label');
    expect(element).toHaveClass('hydrated');
  });
});
