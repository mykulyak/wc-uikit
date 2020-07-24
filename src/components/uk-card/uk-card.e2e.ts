import { newE2EPage } from '@stencil/core/testing';

describe('uk-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-card></uk-card>');

    const element = await page.find('uk-card');
    expect(element).toHaveClass('hydrated');
  });
});
