webpackJsonp([116],{679:function(e,t){e.exports='import React from \'react\'\nimport { NavBar } from \'key-ui/nav-bar\'\nimport { List } from \'key-ui/list\'\nimport { TextareaItem } from \'key-ui/textarea-item\'\nimport styles from \'./TextareaItem.css\'\n\nexport default () => (\n    <div>\n        <NavBar title="TextareaItem Demo" />\n        <List header="多行输入">\n            <TextareaItem\n                title="自动适配"\n                adaptHeight\n                placeholder="输入内容"\n            />\n            <TextareaItem\n                title="固定两行"\n                rows={2}\n                placeholder="输入内容"\n                className={styles.top}\n                style={{ padding: 0 }}\n            />\n            <TextareaItem\n                count={144}\n                rows={3}\n                adaptHeight\n                placeholder="自动计数"\n            />\n        </List>\n    </div>\n)\n\n'}});