/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { css } from 'lit-element';
export default css `.spectrum-DropIndicator{--spectrum-dropindicator-circle-size: var(--spectrum-global-dimension-static-size-150);--spectrum-dropindicator-border-size: var(--spectrum-alias-border-size-thick);--spectrum-dropindicator-border-color: var(--spectrum-global-color-blue-400);--spectrum-dropindicator-circle-border-color: var(--spectrum-global-color-blue-400)}.spectrum-DropIndicator{position:relative}.spectrum-DropIndicator:before,.spectrum-DropIndicator:after{content:"";position:absolute;width:var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150));height:var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150));border-radius:50%;border:var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) solid;box-sizing:border-box}.spectrum-DropIndicator--horizontal{height:var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick));margin:0 var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150))}.spectrum-DropIndicator--horizontal:before,.spectrum-DropIndicator--horizontal:after{top:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) / 2 + var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) / 2)}.spectrum-DropIndicator--horizontal:before{left:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)))}.spectrum-DropIndicator--horizontal:after{right:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)))}.spectrum-DropIndicator--vertical{width:var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick));margin:var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) 0}.spectrum-DropIndicator--vertical:before,.spectrum-DropIndicator--vertical:after{left:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)) / 2 + var(--spectrum-dropindicator-border-size, var(--spectrum-alias-border-size-thick)) / 2)}.spectrum-DropIndicator--vertical:before{top:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)))}.spectrum-DropIndicator--vertical:after{bottom:calc(-1 * var(--spectrum-dropindicator-circle-size, var(--spectrum-global-dimension-static-size-150)))}.spectrum-DropIndicator{background:var(--spectrum-dropindicator-border-color, var(--spectrum-global-color-blue-400))}.spectrum-DropIndicator:before,.spectrum-DropIndicator:after{border-color:var(--spectrum-dropindicator-circle-border-color, var(--spectrum-global-color-blue-400))}`;
//# sourceMappingURL=dropindicator.styles.js.map