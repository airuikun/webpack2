# webpack2
基于Webpack2+React+Redux+Immutable的项目框架

## 1. 安装框架  ##

通过gitlab拉取下项目代码以后，安装里面的必要插件

npm i

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

	目前还有部分功能尚未完善，比如scss引入。因主要是写框架，所以页面只写了2个简单的input，举例说明用React+Redux+Immutable框架的数据流转。关于webpack升级2.0，官方有详细的文档，可按照官方文档升级，一些注意的细节（坑）后续有时间再整理出来，另外tree-shaking功能还在测试中，欢迎一起交流学习~
