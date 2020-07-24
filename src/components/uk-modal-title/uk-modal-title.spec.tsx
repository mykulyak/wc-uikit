import { newSpecPage } from '@stencil/core/testing';
import { UkModalTitle } from './uk-modal-title';

describe('uk-modal-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkModalTitle],
      html: `<uk-modal-title></uk-modal-title>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-modal-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-modal-title>
    `);
  });
});
