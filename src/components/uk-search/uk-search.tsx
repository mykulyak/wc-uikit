import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-search',
  styleUrl: 'uk-search.scss',
  shadow: true,
})
export class UkSearch implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
