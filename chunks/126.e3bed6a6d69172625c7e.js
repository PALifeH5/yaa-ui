webpackJsonp([126],{669:function(t,n){t.exports='import React, { Component } from \'react\'\nimport { NavBar } from \'key-ui/nav-bar\'\nimport { Button } from \'key-ui/button\'\nimport { Modal, Alert, Confirm, Prompt } from \'key-ui/modal\'\nimport { Icon } from \'key-ui/icon\'\n\nexport default class Demo extends Component {\n    state = {\n        modal1: false,\n        modal2: false,\n        modal3: false,\n        modal4: false,\n        modal5: false,\n    }\n\n    render() {\n        return (\n            <div>\n                <NavBar title="Modal Demo" />\n                <Button type="secondary" onTouchTap={() => this.setState({ modal1: true })}>\n                    Alert\n                </Button>\n                <Alert\n                    show={this.state.modal1}\n                    content="系统弹窗内容文字样式"\n                    onTouchYes={() => this.setState({ modal1: false })}\n                />\n\n                <Button type="secondary" onTouchTap={() => this.setState({ modal2: true })}>\n                    Confirm\n                </Button>\n                <Confirm\n                    show={this.state.modal2}\n                    title="标题文字"\n                    content="系统弹窗内容文字样式"\n                    onTouchYes={() => this.setState({ modal2: false })}\n                    onTouchNo={() => this.setState({ modal2: false })}\n                />\n\n                <Button type="secondary" onTouchTap={() => this.setState({ modal3: true })}>\n                    Modal\n                </Button>\n                <Modal\n                    show={this.state.modal3}\n                    title="标题文字"\n                    content="系统弹窗内容文字样式，内容过多时换行居中显示"\n                    buttons={[\'主按钮\', \'次按钮\', \'次按钮\']}\n                    onChange={(index, e) => this.setState({ modal3: false })}\n                />\n\n                <Button type="secondary" onTouchTap={() => this.setState({ modal4: true })}>\n                    Prompt\n                </Button>\n                <Prompt\n                    show={this.state.modal4}\n                    title="标题文字"\n                    content="系统弹窗内容文字样式"\n                    onTouchYes={() => this.setState({ modal4: false })}\n                    onTouchNo={() => this.setState({ modal4: false })}\n                    inputProps={{\n                        placeholder: \'输入文字\',\n                        maxLength: 10,\n                    }}\n                />\n\n                <Button type="secondary" onTouchTap={() => this.setState({ modal5: true })}>\n                    Confirm With Icon\n                </Button>\n                <Confirm\n                    show={this.state.modal5}\n                    icon={<Icon type="success" />}\n                    title="标题文字"\n                    content="系统弹窗内容文字样式，内容过多时换行居中显示"\n                    onTouchYes={() => this.setState({ modal5: false })}\n                    onTouchNo={() => this.setState({ modal5: false })}\n                />\n            </div>\n        )\n    }\n}\n\n'}});