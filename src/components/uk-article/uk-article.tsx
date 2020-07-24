import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-article',
  styleUrl: 'uk-article.scss',
  shadow: true,
})
export class UkArticle implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
