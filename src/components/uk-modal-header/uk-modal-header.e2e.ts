import { newE2EPage } from '@stencil/core/testing';

describe('uk-modal-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-modal-header></uk-modal-header>');

    const element = await page.find('uk-modal-header');
    expect(element).toHaveClass('hydrated');
  });
});
