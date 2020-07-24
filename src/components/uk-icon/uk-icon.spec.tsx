import { newSpecPage } from '@stencil/core/testing';
import { UkIcon } from './uk-icon';

describe('uk-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkIcon],
      html: `<uk-icon></uk-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-icon>
    `);
  });
});
