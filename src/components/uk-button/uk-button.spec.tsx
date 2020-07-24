import { newSpecPage } from '@stencil/core/testing';
import { UkButton } from './uk-button';

describe('uk-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkButton],
      html: `<uk-button></uk-button>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-button>
    `);
  });
});
