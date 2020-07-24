import { newE2EPage } from '@stencil/core/testing';

describe('uk-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-tile></uk-tile>');

    const element = await page.find('uk-tile');
    expect(element).toHaveClass('hydrated');
  });
});
