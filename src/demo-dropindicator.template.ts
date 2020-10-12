import { html } from 'lit-element';
import { DemoDropindicator } from './demo-dropindicator.component';

import '@spectrum/sp-dropindicator';
import '@spectrum/sp-container';


export default function template(this: DemoDropindicator) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard - Vertical"></sp-rule>
  <sp-demo width="400"  height="400">
  <pre><sp-dropindicator height="300" vertical></sp-dropindicator></pre>
  </sp-demo>
  <sp-rule medium label="Standard - Horizontal"></sp-rule>
  <sp-demo width="400">
  <pre><sp-dropindicator width="300" horizontal></sp-dropindicator></pre>
  </sp-demo>
  </sp-container>
  `;
  
}
