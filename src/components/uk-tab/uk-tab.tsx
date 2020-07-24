import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-tab',
  styleUrl: 'uk-tab.scss',
  shadow: true,
})
export class UkTab implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
