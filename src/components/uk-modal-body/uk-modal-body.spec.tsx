import { newSpecPage } from '@stencil/core/testing';
import { UkModalBody } from './uk-modal-body';

describe('uk-modal-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkModalBody],
      html: `<uk-modal-body></uk-modal-body>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-modal-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-modal-body>
    `);
  });
});
