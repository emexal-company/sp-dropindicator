import { Base } from '@spectrum/sp-base';
export declare class Dropindicator extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    horizontal: boolean;
    vertical: boolean;
    width: string;
    height: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-dropindicator': Dropindicator;
    }
}
