import { newE2EPage } from '@stencil/core/testing';

describe('uk-description-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-description-list></uk-description-list>');

    const element = await page.find('uk-description-list');
    expect(element).toHaveClass('hydrated');
  });
});
