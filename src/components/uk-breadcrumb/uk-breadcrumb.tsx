import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-breadcrumb',
  styleUrl: 'uk-breadcrumb.scss',
  shadow: true,
})
export class UkBreadcrumb implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
