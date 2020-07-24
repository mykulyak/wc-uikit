import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-lightbox',
  styleUrl: 'uk-lightbox.scss',
  shadow: true,
})
export class UkLightbox implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
