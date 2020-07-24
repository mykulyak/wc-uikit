import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-dropdown',
  styleUrl: 'uk-dropdown.scss',
  shadow: true,
})
export class UkDropdown implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
