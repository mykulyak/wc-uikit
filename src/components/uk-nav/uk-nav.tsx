import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-nav',
  styleUrl: 'uk-nav.scss',
  shadow: true,
})
export class UkNav implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
