import { newE2EPage } from '@stencil/core/testing';

describe('uk-modal-body', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-modal-body></uk-modal-body>');

    const element = await page.find('uk-modal-body');
    expect(element).toHaveClass('hydrated');
  });
});
