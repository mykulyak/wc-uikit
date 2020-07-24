import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-accordion',
  styleUrl: 'uk-accordion.scss',
  shadow: true,
})
export class UkAccordion implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
