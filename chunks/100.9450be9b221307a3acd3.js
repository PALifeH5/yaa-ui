webpackJsonp([100],{658:function(n,o){n.exports="# nav-bar.js\n\n`{ NavBar, BackArrow }`\n\n## NavBar\n\n顶部导航栏，布局如下,\n\n```\n+-------------------------------------+\n| left |         title        | right |\n+-------------------------------------+\n```\n\n### API\n\n| props        | 说明           | 类型      | 默认值               | 必需 |\n| :----------- | :------------- | :-------- | :------------------- | :--- |\n| title        | 标题           | ReactNode | <BackArrow />        |      |\n| fixed        | 是否固定在顶部 | Boolean   | true                 |      |\n| left         | 左侧节点       | ReactNode | false                |      |\n| onTouchLeft  | 左侧点击回调   | Boolean   | () => history.back() |      |\n| right        | 右侧节点       | ReactNode | false                |      |\n| onTouchRight | 右侧点击回调   | Boolean   | false                |      |\n\n## BackArrow\n\n左侧箭头图标\n\n### API\n\n| props | 说明           | 类型      | 默认值        | 必需 |\n| :---- | :------------- | :-------- | :------------ | :--- |\n| color | 箭头颜色           | String | #999 |      |\n| style | 自定义CSS样式 | Object   |           |      |\n"}});