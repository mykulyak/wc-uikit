import { newSpecPage } from '@stencil/core/testing';
import { UkBreadcrumb } from './uk-breadcrumb';

describe('uk-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkBreadcrumb],
      html: `<uk-breadcrumb></uk-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-breadcrumb>
    `);
  });
});
