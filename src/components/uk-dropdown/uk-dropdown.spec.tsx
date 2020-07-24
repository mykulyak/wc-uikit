import { newSpecPage } from '@stencil/core/testing';
import { UkDropdown } from './uk-dropdown';

describe('uk-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkDropdown],
      html: `<uk-dropdown></uk-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-dropdown>
    `);
  });
});
