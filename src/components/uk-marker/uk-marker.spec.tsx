import { newSpecPage } from '@stencil/core/testing';
import { UkMarker } from './uk-marker';

describe('uk-marker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkMarker],
      html: `<uk-marker></uk-marker>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-marker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-marker>
    `);
  });
});
