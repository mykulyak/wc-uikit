import { newSpecPage } from '@stencil/core/testing';
import { UkNavbar } from './uk-navbar';

describe('uk-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkNavbar],
      html: `<uk-navbar></uk-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-navbar>
    `);
  });
});
