import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-alert',
  styleUrl: 'uk-alert.scss',
  shadow: true,
})
export class UkAlert implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
