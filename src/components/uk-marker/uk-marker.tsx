import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-marker',
  styleUrl: 'uk-marker.scss',
  shadow: true,
})
export class UkMarker implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
