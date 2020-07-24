import { newSpecPage } from '@stencil/core/testing';
import { UkText } from './uk-text';

describe('uk-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkText],
      html: `<uk-text></uk-text>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-text>
    `);
  });
});
