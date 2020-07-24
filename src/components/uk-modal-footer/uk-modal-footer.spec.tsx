import { newSpecPage } from '@stencil/core/testing';
import { UkModalFooter } from './uk-modal-footer';

describe('uk-modal-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkModalFooter],
      html: `<uk-modal-footer></uk-modal-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-modal-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-modal-footer>
    `);
  });
});
