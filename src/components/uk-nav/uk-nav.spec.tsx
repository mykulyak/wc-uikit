import { newSpecPage } from '@stencil/core/testing';
import { UkNav } from './uk-nav';

describe('uk-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkNav],
      html: `<uk-nav></uk-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-nav>
    `);
  });
});
