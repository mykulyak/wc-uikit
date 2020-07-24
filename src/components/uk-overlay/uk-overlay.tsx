import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-overlay',
  styleUrl: 'uk-overlay.scss',
  shadow: true,
})
export class UkOverlay implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
