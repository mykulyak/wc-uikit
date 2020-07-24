import { newSpecPage } from '@stencil/core/testing';
import { UkOffcanvas } from './uk-offcanvas';

describe('uk-offcanvas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkOffcanvas],
      html: `<uk-offcanvas></uk-offcanvas>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-offcanvas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-offcanvas>
    `);
  });
});
