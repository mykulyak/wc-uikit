import { newSpecPage } from '@stencil/core/testing';
import { UkAccordion } from './uk-accordion';

describe('uk-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkAccordion],
      html: `<uk-accordion></uk-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-accordion>
    `);
  });
});
