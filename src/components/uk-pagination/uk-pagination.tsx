import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-pagination',
  styleUrl: 'uk-pagination.scss',
  shadow: true,
})
export class UkPagination implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
