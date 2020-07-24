import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-description-list',
  styleUrl: 'uk-description-list.scss',
  shadow: true,
})
export class UkDescriptionList implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
