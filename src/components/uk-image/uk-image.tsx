import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-image',
  styleUrl: 'uk-image.scss',
  shadow: true,
})
export class UkImage implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
