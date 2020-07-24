import { newSpecPage } from '@stencil/core/testing';
import { UkList } from './uk-list';

describe('uk-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkList],
      html: `<uk-list></uk-list>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-list>
    `);
  });
});
