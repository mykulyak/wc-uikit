import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-text',
  styleUrl: 'uk-text.scss',
  shadow: true,
})
export class UkText implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
