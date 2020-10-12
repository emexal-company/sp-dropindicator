import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Dropindicator } from './dropindicator.component';

export default function standardTemplate(this: Dropindicator) {
    const classes = {
        'spectrum-DropIndicator--horizontal': this.horizontal,
        'spectrum-DropIndicator--vertical': this.vertical
      };
    
    
return html`
<div style="display: flex; align-items: center">
  <div class="spectrum-DropIndicator ${classMap(classes)}" style="height: ${this.height}px; width: ${this.width}px; margin-right: 100px;"></div>
</div>
   `;
}
