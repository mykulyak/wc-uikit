import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-list',
  styleUrl: 'uk-list.scss',
  shadow: true,
})
export class UkList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
