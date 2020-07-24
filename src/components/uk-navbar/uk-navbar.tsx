import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-navbar',
  styleUrl: 'uk-navbar.scss',
  shadow: true,
})
export class UkNavbar implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
