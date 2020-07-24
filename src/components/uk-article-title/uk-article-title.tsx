import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-article-title',
  styleUrl: 'uk-article-title.scss',
  shadow: true,
})
export class UkArticleTitle implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
