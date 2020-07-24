import { newE2EPage } from '@stencil/core/testing';

describe('uk-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-modal></uk-modal>');

    const element = await page.find('uk-modal');
    expect(element).toHaveClass('hydrated');
  });
});
