webpackJsonp([135],{699:function(e,n){e.exports="import React, { Component } from 'react'\nimport { RefreshControl } from 'key-ui/refresh-control'\nimport { NavBar } from 'key-ui/nav-bar'\n\nconst listPullDown = [\n    require('./images/demo2.jpg'),\n    require('./images/demo3.jpg'),\n    require('./images/demo4.jpg'),\n    require('./images/demo5.jpg'),\n    require('./images/demo6.jpg'),\n    require('./images/demo7.jpg'),\n    require('./images/demo8.jpg'),\n    require('./images/demo9.jpg'),\n]\n\nconst listPullUp = [\n    require('./images/demo7.jpg'),\n    require('./images/demo8.jpg'),\n    require('./images/demo9.jpg'),\n    require('./images/demo3.jpg'),\n    require('./images/demo4.jpg'),\n    require('./images/demo5.jpg'),\n]\n\nexport default class RefreshControlExample extends Component {\n    state = {\n        list1: listPullDown,\n        list2: listPullUp,\n        hasMore: true,\n        index: 5,\n    }\n\n    handleOnPullDownPromise = () => new Promise((resolve, reject) => {\n        setTimeout(() => { // 模拟请求接口，\n            // 用户逻辑\n            resolve() // 下拉更新成功后调用resolve()，下拉更新失败调用reject()\n        }, 3000)\n    })\n\n    handleOnPullUpPromise = () => new Promise((resolve, reject) => {\n        const { list2 } = this.state\n        setTimeout(() => { // 模拟请求接口，\n            // 用户逻辑 .....\n            if (this.state.index <= 0) {\n                this.setState({\n                    hasMore: false,\n                }, () => {\n                    resolve() // 上拉加载成功后调用resolve()，上拉加载失败调用reject()\n                })\n            }\n            else {\n                this.setState({\n                    list2: [...list2, list2[1], list2[2]],\n                    index: this.state.index - 1,\n                }, () => {\n                    resolve() // 上拉加载成功后调用resolve()，上拉加载失败调用reject()\n                })\n            }\n        }, 3000)\n    })\n\n    render() {\n        const { list1, list2, hasMore } = this.state\n        return (\n            <div>\n                <NavBar title=\"RefreshControl 组件示例\" />\n                <div>下拉刷新</div>\n                <RefreshControl\n                    onPullDownPromise={this.handleOnPullDownPromise}\n                    height={document.documentElement.clientHeight / 2.5}\n                // isCustomized\n                >\n                    {\n                        list1.map((str, i) => {\n                            const index = i\n                            return (<img style={{ width: '100%' }} key={index} src={str} alt=\"\" />)\n                        })\n                    }\n                </RefreshControl>\n                <div>上拉加载</div>\n                <RefreshControl\n                    onPullUpPromise={this.handleOnPullUpPromise}\n                    height={document.documentElement.clientHeight / 2.5}\n                    hasMore={hasMore}\n                // isCustomized\n                >\n                    {\n                        list2.map((str, i) => {\n                            const index = i\n                            return (<img style={{ width: '100%' }} key={index} src={str} alt=\"\" />)\n                        })\n                    }\n                </RefreshControl>\n            </div>\n        )\n    }\n}\n"}});