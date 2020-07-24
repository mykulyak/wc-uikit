import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-modal-header',
  styleUrl: 'uk-modal-header.scss',
  shadow: true,
})
export class UkModalHeader implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
