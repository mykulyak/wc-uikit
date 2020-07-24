import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-modal',
  styleUrl: 'uk-modal.scss',
  shadow: true,
})
export class UkModal implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
