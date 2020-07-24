import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-link',
  styleUrl: 'uk-link.scss',
  shadow: true,
})
export class UkLink implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
