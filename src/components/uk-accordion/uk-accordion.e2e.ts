import { newE2EPage } from '@stencil/core/testing';

describe('uk-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-accordion></uk-accordion>');

    const element = await page.find('uk-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
