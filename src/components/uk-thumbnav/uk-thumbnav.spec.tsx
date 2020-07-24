import { newSpecPage } from '@stencil/core/testing';
import { UkThumbnav } from './uk-thumbnav';

describe('uk-thumbnav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkThumbnav],
      html: `<uk-thumbnav></uk-thumbnav>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-thumbnav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-thumbnav>
    `);
  });
});
