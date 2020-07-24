import { newSpecPage } from '@stencil/core/testing';
import { UkListItem } from './uk-list-item';

describe('uk-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkListItem],
      html: `<uk-list-item></uk-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-list-item>
    `);
  });
});
