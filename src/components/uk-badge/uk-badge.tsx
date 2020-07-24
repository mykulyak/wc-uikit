import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-badge',
  styleUrl: 'uk-badge.scss',
  shadow: true,
})
export class UkBadge implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
