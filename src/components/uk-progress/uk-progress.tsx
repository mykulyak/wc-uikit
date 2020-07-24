import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-progress',
  styleUrl: 'uk-progress.scss',
  shadow: true,
})
export class UkProgress implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
