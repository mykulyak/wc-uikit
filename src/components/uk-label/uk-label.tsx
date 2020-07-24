import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-label',
  styleUrl: 'uk-label.scss',
  shadow: true,
})
export class UkLabel implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
