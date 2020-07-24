import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-offcanvas',
  styleUrl: 'uk-offcanvas.scss',
  shadow: true,
})
export class UkOffcanvas implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
