import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-list-item',
  styleUrl: 'uk-list-item.scss',
  shadow: true,
})
export class UkListItem implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
