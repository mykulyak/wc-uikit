import { newSpecPage } from '@stencil/core/testing';
import { UkBadge } from './uk-badge';

describe('uk-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkBadge],
      html: `<uk-badge></uk-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-badge>
    `);
  });
});
