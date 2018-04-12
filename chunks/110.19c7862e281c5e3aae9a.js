webpackJsonp([110],{648:function(e,n){e.exports="# flow-selector.js\n\n`{ FlowSelector }`\n\n## FlowSelector\n\n流式级联选择器。与 [Select[cascade=true]](#/api/select) 时的功能类似，但是不一次性显示所有列数据。data 数据类型一致。\n\n### API\n\n| props | 说明 | 类型 | 默认值 | 必需 | \n|:--|:--|:--|:--|:--|\n| show | 是否显示 | Boolean | false | |\n| value | 值（受控）| \\[objectKeyProp\\] | | |\n| data | 最小值 | cascadeDataProp | | |\n| dataKeyMap | 数据键值映射 | { value: String, label: String, children: String } | { value: 'value', label: 'label', children: 'children' } | |\n| closeButton | 关闭按钮 | ReactNode | \\<Close /\\> | |\n| onChange | 变更回调 | (values, pairs, Event) => {} | | | \n| onCancel | 取消回调 | Event => {} | | |\n| headerLabel | 头部 Breadcrumb 末尾文本 | ReactNode 或 \\[ReactNode\\] | '请选择' | |\n\n`headerLabel` 如果不是数组，则所有层级的 Breadcrumb 都会以其展示；如果是数组，则会尝试对应层级 index 去数组索引。\n\n"}});