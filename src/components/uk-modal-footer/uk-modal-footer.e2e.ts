import { newE2EPage } from '@stencil/core/testing';

describe('uk-modal-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-modal-footer></uk-modal-footer>');

    const element = await page.find('uk-modal-footer');
    expect(element).toHaveClass('hydrated');
  });
});
