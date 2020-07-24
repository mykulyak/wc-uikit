import { newSpecPage } from '@stencil/core/testing';
import { UkOverlay } from './uk-overlay';

describe('uk-overlay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkOverlay],
      html: `<uk-overlay></uk-overlay>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-overlay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-overlay>
    `);
  });
});
