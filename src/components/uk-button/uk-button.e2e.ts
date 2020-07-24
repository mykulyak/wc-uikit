import { newE2EPage } from '@stencil/core/testing';

describe('uk-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-button></uk-button>');

    const element = await page.find('uk-button');
    expect(element).toHaveClass('hydrated');
  });
});
