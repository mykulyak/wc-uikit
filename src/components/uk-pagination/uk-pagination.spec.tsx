import { newSpecPage } from '@stencil/core/testing';
import { UkPagination } from './uk-pagination';

describe('uk-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkPagination],
      html: `<uk-pagination></uk-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-pagination>
    `);
  });
});
