import { newSpecPage } from '@stencil/core/testing';
import { UkDotnav } from './uk-dotnav';

describe('uk-dotnav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkDotnav],
      html: `<uk-dotnav></uk-dotnav>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-dotnav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-dotnav>
    `);
  });
});
