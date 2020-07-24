import { newSpecPage } from '@stencil/core/testing';
import { UkModal } from './uk-modal';

describe('uk-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkModal],
      html: `<uk-modal></uk-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-modal>
    `);
  });
});
