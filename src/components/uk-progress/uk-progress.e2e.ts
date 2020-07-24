import { newE2EPage } from '@stencil/core/testing';

describe('uk-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-progress></uk-progress>');

    const element = await page.find('uk-progress');
    expect(element).toHaveClass('hydrated');
  });
});
