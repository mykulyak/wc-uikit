import { newSpecPage } from '@stencil/core/testing';
import { UkPlaceholder } from './uk-placeholder';

describe('uk-placeholder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkPlaceholder],
      html: `<uk-placeholder></uk-placeholder>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-placeholder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-placeholder>
    `);
  });
});
