import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-placeholder',
  styleUrl: 'uk-placeholder.scss',
  shadow: true,
})
export class UkPlaceholder implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
