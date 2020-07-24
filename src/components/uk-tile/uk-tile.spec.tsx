import { newSpecPage } from '@stencil/core/testing';
import { UkTile } from './uk-tile';

describe('uk-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UkTile],
      html: `<uk-tile></uk-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <uk-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </uk-tile>
    `);
  });
});
