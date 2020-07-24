import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-spinner',
  styleUrl: 'uk-spinner.scss',
  shadow: true,
})
export class UkSpinner implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
