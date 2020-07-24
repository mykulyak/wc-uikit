import { newE2EPage } from '@stencil/core/testing';

describe('uk-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-heading></uk-heading>');

    const element = await page.find('uk-heading');
    expect(element).toHaveClass('hydrated');
  });
});
