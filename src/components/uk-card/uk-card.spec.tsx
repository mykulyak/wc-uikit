import { newSpecPage } from '@stencil/core/testing';
import { UkCard } from './uk-card';

describe('uk-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkCard],
      html: `<uk-card></uk-card>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-card>
    `);
  });
});
