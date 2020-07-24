import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-icon',
  styleUrl: 'uk-icon.scss',
  shadow: true,
})
export class UkIcon implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
