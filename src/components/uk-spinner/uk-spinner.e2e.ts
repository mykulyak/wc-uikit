import { newE2EPage } from '@stencil/core/testing';

describe('uk-spinner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-spinner></uk-spinner>');

    const element = await page.find('uk-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
