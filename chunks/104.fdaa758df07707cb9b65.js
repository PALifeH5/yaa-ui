webpackJsonp([104],{654:function(e,n){e.exports="# lazy-load.js\n\n`{ LazyLoad, rectanglesIntersect, FrameOfReference }`\n\n## LazyLoad\n\n懒加载子节点。当子节点在参照系的视口之外时，不做渲染；当子节点进入参照系的视口内时，做渲染。\n\n### API\n\n| props | 说明 | 类型 | 默认值 | 必需 |\n|:--|:--|:--|:--|:--|\n| children | 懒加载子节点 | ReactNode | | 是 |\n| offsetLeft | 参照系左边界提前值 | Number | `0` | |\n| offsetRight | 参照系右边界提前值 | Number | `0` | |\n| offsetTop | 参照系上边界提前值 | Number | `0` | |\n| offsetBottom | 参照系下边界提前值 | Number | `0` | |\n| hideChildrenOnLeaveScreen | 是否子节点离开参照系时不再渲染 | Boolean | `0` | |\n| onEnterScreen | 进入视口回调 | () => {} | | |\n| onLeaveScreen | 离开视口回调 | () => {} | | |\n| frameOfReference | 参照系 | FrameOfReference | `FrameOfReference.Window` | |\n| reference | 参照节点，当 `FrameOfReference.Custom` 时使用 | ReactElement | | |\n\n## `rectanglesIntersect(rectA, rectB) => boolean`\n\n判断两个矩形是否相交。矩形需包含四个属性： `left`, `right`, `top`, `bottom`。\n\n```js\nrectanglesIntersect({ top: -10, bottom: -1, left: 0, right: 10 }, { top: 0, bottom: 568, left: 0, right: 320 }) // false\nrectanglesIntersect({ top: -10, bottom: 1, left: 0, right: 10 }, { top: 0, bottom: 568, left: 0, right: 320 }) // true\n```\n\n## FrameOfReference\n\n- `FrameOfReference.Window`: 参照系为 window 的 viewport\n- `FrameOfReference.Parent`: 参照系为 parent\n- `FrameOfReference.Custom`: 参照系为自定义（使用 `reference` prop 的值）\n"}});