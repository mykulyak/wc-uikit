import { newE2EPage } from '@stencil/core/testing';

describe('uk-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uk-table></uk-table>');

    const element = await page.find('uk-table');
    expect(element).toHaveClass('hydrated');
  });
});
