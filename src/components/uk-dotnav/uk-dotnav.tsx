import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-dotnav',
  styleUrl: 'uk-dotnav.scss',
  shadow: true,
})
export class UkDotnav implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
