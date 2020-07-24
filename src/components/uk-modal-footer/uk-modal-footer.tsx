import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-modal-footer',
  styleUrl: 'uk-modal-footer.scss',
  shadow: true,
})
export class UkModalFooter implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
