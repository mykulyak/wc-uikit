import { newSpecPage } from '@stencil/core/testing';
import { UkModalHeader } from './uk-modal-header';

describe('uk-modal-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkModalHeader],
      html: `<uk-modal-header></uk-modal-header>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-modal-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-modal-header>
    `);
  });
});
