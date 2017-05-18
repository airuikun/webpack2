# webpack2
基于Webpack2+React+Redux+Immutable的项目框架

## 1. 安装框架  ##

通过github拉取下项目代码以后，安装里面的必要插件

npm install

## 2. 框架简介 ##

+ 基础框架：
    + react
    + react-dom
+ javascript语法：
    + es6
    + es7
+ 状态管理：
    + redux
    + Immutable
+ 层叠样式表：
    + css  
    + sass  
+ 基础构建工具：
    + webpack 2.0
+ 本地调试：
    + webpack-dev-server
    + 热启动 hot-load-module 

## 3. 目录规范 ##

    ├── src
	│   ├── actions
	│   │   ├── index.js	
	│   │   ├── user.js			// 单个action
	│   │   └── ...
	│   ├── components			// 组件
	│   │   ├── Tabs
	│   │   │   ├── index.js
	│   │   │   └── style.scss
	│   │   └── ...
	│   ├── containers			// 页面路由入口
	│   │   ├── Demo
	│   │   │   ├── index.js
	│   │   │   └── style.scss
	│   │   └── ...
	│   ├── common				// 公用依赖
	│   │   ├── index.css
	│   │   └── ...
	│   ├── reducers			// reducers
	│   │   ├── index.js
	│   │   ├── user.js			// 单个reducer
	│   │   └── ...
	│   ├── router				// 路由配置
	│   │   ├── index.js
	│   │   └── ...
	│   ├── store				// store配置
	│   │   └── index.js
	│   │   └── ...
	│   └── index.js			//  入口
	├── node-modules
	├── dist				//  打包目录
	├── test				//  测试
	│   ├── tabs.test.js
	│   └── ...
	├── .babelrc				//  babel配置
	├── .gitignore              		//  git的路径文件忽略
	├── webpack_dev_config.js   		//  webpack本地调试的配置文件
	├── webpack_production_config.js  	//  webpack编译上线代码的配置文件
	└── package.json

## 4. 说明  ##

	目前还有部分功能尚未完善，比如scss引入。因主要是写框架，所以页面只写了2个简单的input，举例说明用React+Redux+Immutable框架的数据流转。关于webpack升级2.0，官方有详细的文档，可按照官方文档升级，一些注意的细节（坑）后续更新，另外tree-shaking功能还在测试中，欢迎一起交流学习~
	
+ 依赖升级
        + 需要将node升级到最新的LTS版本。升级react,babel相应版本。
	+ export语法规范问题，升级后
	+ 注意：从 react 15.5.0，React.PropTypes and React.createClass开始使用自己的安装包（详情可见console里面的warning）,单独安装prop-types和create-react-class，然后修改相应的写法，但因为安装的依赖里面仍有旧式写法，所以会有warning的log，但目前这是兼容的，不影响框架的正常使用，大家可以自己再优化优化~
```
Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
Warning: RouterContext: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.
```
```
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
```
