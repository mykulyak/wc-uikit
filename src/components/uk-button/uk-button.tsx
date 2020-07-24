import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-button',
  styleUrl: 'uk-button.scss',
  shadow: true,
})
export class UkButton implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
