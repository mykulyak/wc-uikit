import { newE2EPage } from '@stencil/core/testing';

describe('uk-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-tooltip></uk-tooltip>');

    const element = await page.find('uk-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
