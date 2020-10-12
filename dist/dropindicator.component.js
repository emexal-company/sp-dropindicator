import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './dropindicator.styles';
import standardTemplate from './dropindicator.template';
let Dropindicator = class Dropindicator extends Base {
    constructor() {
        super(...arguments);
        this.horizontal = false;
        this.vertical = false;
        this.width = '';
        this.height = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Dropindicator.componentStyles = [labelStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dropindicator.prototype, "horizontal", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Dropindicator.prototype, "vertical", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dropindicator.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Dropindicator.prototype, "height", void 0);
Dropindicator = __decorate([
    customElement('sp-dropindicator')
], Dropindicator);
export { Dropindicator };
//# sourceMappingURL=dropindicator.component.js.map