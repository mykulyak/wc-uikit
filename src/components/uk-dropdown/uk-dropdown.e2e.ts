import { newE2EPage } from '@stencil/core/testing';

describe('uk-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-dropdown></uk-dropdown>');

    const element = await page.find('uk-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
