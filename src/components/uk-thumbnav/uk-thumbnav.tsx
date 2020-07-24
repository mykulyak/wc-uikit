import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-thumbnav',
  styleUrl: 'uk-thumbnav.scss',
  shadow: true,
})
export class UkThumbnav implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
