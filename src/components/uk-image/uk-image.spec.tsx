import { newSpecPage } from '@stencil/core/testing';
import { UkImage } from './uk-image';

describe('uk-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkImage],
      html: `<uk-image></uk-image>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-image>
    `);
  });
});
