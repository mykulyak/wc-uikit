import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-card',
  styleUrl: 'uk-card.scss',
  shadow: true,
})
export class UkCard implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
