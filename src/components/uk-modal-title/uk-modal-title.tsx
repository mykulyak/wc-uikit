import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-modal-title',
  styleUrl: 'uk-modal-title.scss',
  shadow: true,
})
export class UkModalTitle implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
