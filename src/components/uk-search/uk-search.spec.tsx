import { newSpecPage } from '@stencil/core/testing';
import { UkSearch } from './uk-search';

describe('uk-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkSearch],
      html: `<uk-search></uk-search>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-search>
    `);
  });
});
