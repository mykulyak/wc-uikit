import { newSpecPage } from '@stencil/core/testing';
import { UkTooltip } from './uk-tooltip';

describe('uk-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkTooltip],
      html: `<uk-tooltip></uk-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-tooltip>
    `);
  });
});
