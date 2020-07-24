import { newSpecPage } from '@stencil/core/testing';
import { UkLabel } from './uk-label';

describe('uk-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkLabel],
      html: `<uk-label></uk-label>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-label>
    `);
  });
});
