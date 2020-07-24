import { newSpecPage } from '@stencil/core/testing';
import { UkProgress } from './uk-progress';

describe('uk-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkProgress],
      html: `<uk-progress></uk-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-progress>
    `);
  });
});
