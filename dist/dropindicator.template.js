import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-DropIndicator--horizontal': this.horizontal,
        'spectrum-DropIndicator--vertical': this.vertical
    };
    return html `
<div style="display: flex; align-items: center">
  <div class="spectrum-DropIndicator ${classMap(classes)}" style="height: ${this.height}px; width: ${this.width}px; margin-right: 100px;"></div>
</div>
   `;
}
//# sourceMappingURL=dropindicator.template.js.map