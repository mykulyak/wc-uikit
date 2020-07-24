import { newE2EPage } from '@stencil/core/testing';

describe('uk-overlay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-overlay></uk-overlay>');

    const element = await page.find('uk-overlay');
    expect(element).toHaveClass('hydrated');
  });
});
