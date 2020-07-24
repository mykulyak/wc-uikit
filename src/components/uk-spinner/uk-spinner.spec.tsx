import { newSpecPage } from '@stencil/core/testing';
import { UkSpinner } from './uk-spinner';

describe('uk-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkSpinner],
      html: `<uk-spinner></uk-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-spinner>
    `);
  });
});
