import { newSpecPage } from '@stencil/core/testing';
import { UkLightbox } from './uk-lightbox';

describe('uk-lightbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkLightbox],
      html: `<uk-lightbox></uk-lightbox>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-lightbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-lightbox>
    `);
  });
});
