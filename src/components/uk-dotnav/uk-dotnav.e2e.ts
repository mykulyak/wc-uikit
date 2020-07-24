import { newE2EPage } from '@stencil/core/testing';

describe('uk-dotnav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-dotnav></uk-dotnav>');

    const element = await page.find('uk-dotnav');
    expect(element).toHaveClass('hydrated');
  });
});
