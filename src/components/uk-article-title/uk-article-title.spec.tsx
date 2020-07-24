import { newSpecPage } from '@stencil/core/testing';
import { UkArticleTitle } from './uk-article-title';

describe('uk-article-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkArticleTitle],
      html: `<uk-article-title></uk-article-title>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-article-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-article-title>
    `);
  });
});
