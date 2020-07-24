import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-tooltip',
  styleUrl: 'uk-tooltip.scss',
  shadow: true,
})
export class UkTooltip implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
