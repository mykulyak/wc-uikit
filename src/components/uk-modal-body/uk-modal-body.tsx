import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-modal-body',
  styleUrl: 'uk-modal-body.scss',
  shadow: true,
})
export class UkModalBody implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
