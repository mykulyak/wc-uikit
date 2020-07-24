import { newE2EPage } from '@stencil/core/testing';

describe('uk-modal-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-modal-title></uk-modal-title>');

    const element = await page.find('uk-modal-title');
    expect(element).toHaveClass('hydrated');
  });
});
