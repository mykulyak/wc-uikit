import { newSpecPage } from '@stencil/core/testing';
import { UkLink } from './uk-link';

describe('uk-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkLink],
      html: `<uk-link></uk-link>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-link>
    `);
  });
});
