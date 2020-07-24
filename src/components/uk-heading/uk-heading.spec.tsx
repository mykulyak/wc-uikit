import { newSpecPage } from '@stencil/core/testing';
import { UkHeading } from './uk-heading';

describe('uk-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkHeading],
      html: `<uk-heading></uk-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-heading>
    `);
  });
});
