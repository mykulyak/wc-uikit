import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-heading',
  styleUrl: 'uk-heading.scss',
  shadow: true,
})
export class UkHeading implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
