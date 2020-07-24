import { newSpecPage } from '@stencil/core/testing';
import { UkTab } from './uk-tab';

describe('uk-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkTab],
      html: `<uk-tab></uk-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-tab>
    `);
  });
});
