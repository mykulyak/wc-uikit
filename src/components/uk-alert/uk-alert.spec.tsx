import { newSpecPage } from '@stencil/core/testing';
import { UkAlert } from './uk-alert';

describe('uk-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkAlert],
      html: `<uk-alert></uk-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-alert>
    `);
  });
});
