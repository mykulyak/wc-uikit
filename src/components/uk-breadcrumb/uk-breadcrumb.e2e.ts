import { newE2EPage } from '@stencil/core/testing';

describe('uk-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-breadcrumb></uk-breadcrumb>');

    const element = await page.find('uk-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
