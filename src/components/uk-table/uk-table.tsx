import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-table',
  styleUrl: 'uk-table.scss',
  shadow: true,
})
export class UkTable implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
