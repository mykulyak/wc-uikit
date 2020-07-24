import { newSpecPage } from '@stencil/core/testing';
import { UkDescriptionList } from './uk-description-list';

describe('uk-description-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkDescriptionList],
      html: `<uk-description-list></uk-description-list>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-description-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-description-list>
    `);
  });
});
