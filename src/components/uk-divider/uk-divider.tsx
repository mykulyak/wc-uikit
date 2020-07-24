import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-divider',
  styleUrl: 'uk-divider.scss',
  shadow: true,
})
export class UkDivider implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
