import { newSpecPage } from '@stencil/core/testing';
import { UkTable } from './uk-table';

describe('uk-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkTable],
      html: `<uk-table></uk-table>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-table>
    `);
  });
});
