import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './dropindicator.styles';
import standardTemplate from './dropindicator.template';

@customElement('sp-dropindicator')
export class Dropindicator extends Base {
  public static componentStyles = [labelStyles];

  @property({ type: Boolean }) public horizontal: boolean = false;
  @property({ type: Boolean }) public vertical: boolean = false;
  @property({ type: String })  public width: string = '';
  @property({ type: String })  public height: string = '';

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-dropindicator': Dropindicator;
  }
}
