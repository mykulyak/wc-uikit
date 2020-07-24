import { newE2EPage } from '@stencil/core/testing';

describe('uk-offcanvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-offcanvas></uk-offcanvas>');

    const element = await page.find('uk-offcanvas');
    expect(element).toHaveClass('hydrated');
  });
});
