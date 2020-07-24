import { newSpecPage } from '@stencil/core/testing';
import { UkArticle } from './uk-article';

describe('uk-article', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkArticle],
      html: `<uk-article></uk-article>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-article>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-article>
    `);
  });
});
