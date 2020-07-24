import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'uk-tile',
  styleUrl: 'uk-tile.scss',
  shadow: true,
})
export class UkTile implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
