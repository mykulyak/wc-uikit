import { newSpecPage } from '@stencil/core/testing';
import { UkDivider } from './uk-divider';

describe('uk-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkDivider],
      html: `<uk-divider></uk-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-divider>
    `);
  });
});
