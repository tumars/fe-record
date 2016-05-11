#前端学习参考记录
 > 本文主要简单记录一些个人学习过程中的一些觉得不错的内容跟工具，大部分是前端开发的相关内容。

 > 受限于个人知识、喜好、懒惰，很多内容都没涉及到。

####您可以通过以下方式联系到我：
 - 邮箱 menghui9898@gmail.com
 - 博客 [前端记录 ferecord.com](http://www.ferecord.com/)

 **若转载本文请注明来源**

---

## 目录
 - [前端博客](#blog)
 - 前端框架
 	- [react](#react)
 	- [redux](#redux)
 - [CSS 相关](#css)
 - 构建工具
 	- [gulp](#gulp)
 	- [webpack](#webpack)
 - 代码编辑器
 	- [sublime text](#sublime)


---

<h3 id="blog">前端博客</h3>

  > 一些不错的团队或个人博客，部分是英文博客，建议全部加进 RSS 订阅里。

  > 这篇[《front-end-collect》](https://github.com/foru17/front-end-collect)总结的更全面，包括了各种前端组织、博客、微博、期刊、书籍等。

  > 我这里只写一些个人订阅的常看的博客。

 名称 | 备注/说明 
 ----- | ----- 
[CSS-Tricks](https://css-tricks.com/) | 大名鼎鼎，更新量很大，每日必看
[codrops](http://tympanus.net/codrops/) | 设计的很漂亮的高质量前端博客
[smashingmagazine](https://www.smashingmagazine.com/) | 涉及到很多设计内容的前端博客
[腾讯 AlloyTeam](http://www.alloyteam.com/) | 腾讯前端团队
[百度 FEX](http://fex.baidu.com/) | 百度前端团队
[淘宝 FED](http://taobaofed.org/) | 淘宝前端团队
[奇舞团](http://www.75team.com/) | 360 前端团队
[前端外刊评论 - 知乎专栏](https://zhuanlan.zhihu.com/FrontendMagazine) | 知乎作为一个初期几乎全是程序员的网站，也有相当多的前端开发
[WEB前端开发](http://www.css88.com/) | 很多人都知道的 css88，收集了很多类库的中文文档
[W3Cplus](http://www.w3cplus.com/) | 大漠(《图解 CSS3》作者)在国内的影响力杠杠的 Sass 专家级
[阮一峰](http://www.ruanyifeng.com/blog/) | 其文章简洁易懂深入浅出，关注多年，著作[《ECMAScript 6标准入门》](http://es6.ruanyifeng.com/)
[张鑫旭](http://www.zhangxinxu.com/wordpress/) | 成名多年的、高产的前端大湿
[轩枫阁](http://www.xuanfengge.com/) | 设计跟内容做的很好的博客，博主是个2014级的毕业生




###前端框架

<h4 id="react">react</h4>

  > Facebook旗下 js 框架, learn one，write anywhere

 名称 | 备注/说明 
 ----- | ----- 
[react官方文档](https://facebook.github.io/react/docs/) | 官方文档，看看api挺好
[react中文文档](http://reactjs.cn/react/docs/getting-started.html) | 官方文档的汉化




<h4 id="redux">redux</h4>

 > 跟 react 配合的最好的状态容器，解决了 react 的 props 不能跨 components 传递的问题

 名称 | 备注/说明 
 ----- | ----- 
[官方文档](http://redux.js.org/) | redux的官方文档，看起来是有点晦涩的
[官方文档汉化版本](https://camsong.github.io/redux-in-chinese/index.html) | 官方文档的汉化版
[英语视频课程](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree?series=getting-started-with-redux) | 官网推荐的入门教学视频教学，语速不快，可以看看
[react redux react-router antd](https://github.com/yinzSE/webpack-react-redux-express-boilerplate) | 一个使用了redux、react-router、express的模板，很不错，功能全面，可以学习下





<h3 id="css">CSS 相关</h3>

  > CSS 的发展相对遍地开花的 JavaScript 慢了很多，前几年只能从bootstrap等类库上做文章，之后less、sass等预处理器，PostCSS 及基于它的插件，CSS 模块化，让 CSS 开发繁荣了起来

 名称 | 备注/说明 
 ----- | ----- 
PostCSS | 大名鼎鼎的[Autoprefixer](https://github.com/postcss/autoprefixer)、[styleLint](https://github.com/stylelint/stylelint)等就是其插件，推荐大漠的文章[《PostCSS深入学习》](http://www.w3cplus.com/PostCSS/postcss-deep-dive-what-you-need-to-know.html)，有关 PostCSS 不是什么？PostCSS 是什么？PostCSS 可以做什么等等问题，文章里面有答案
CSS Modules | 前端组件模块化的最后一道坎,css 模块化,可以看一下[CSS trick里的系列文章](https://css-tricks.com/css-modules-part-1-need/),还有个中文的简介[《CSS Modules 详解及 React 中实践》](https://zhuanlan.zhihu.com/p/20495964)
CSSX | 类似于 JSX ，一种写在 JavaScript 里的 css 语法，可以看[《Finally, CSS In JavaScript! Meet CSSX》](https://www.smashingmagazine.com/2016/04/finally-css-javascript-meet-cssx/)这篇文章了解下




###构建工具

<h4 id="gulp">gulp</h4>

 > 最流行的前端自动化工具，在npm上有非常多插件，几乎解决所有前端常见自动化问题

 名称 | 备注/说明 
 ----- | ----- 
[Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/) | gulp 入门，介绍了gulp的功能跟使用，介绍的几个插件都很有用
[前端构建工具gulpjs的使用介绍及技巧](http://www.dtao.org/archives/18) | gulp 入门，讲的很详细 
[gulp 官网](http://www.gulpjs.com.cn/) | gulp的官网




<h4 id="webpack">webpack</h4>

 > 打包工具，react 开发下的构建神器，与 gulp 等自动化构建工具有功能上的重合，配合 gulp-webpack 插件可与 gulp 一块使用

 名称 | 备注/说明 
 ----- | ----- 
[Webpack vs Require.js vs Browserify](http://hackhat.com/p/110/module-loader-webpack-vs-requirejs-vs-browserify/) | 一篇文章告诉你为什么 webpack 比 require、browserify 好
[webpack-howto](https://github.com/petehunt/webpack-howto) | webpack 的入门文档，简单易懂，讲了些基本功能
[webpack-howto汉化版](https://github.com/petehunt/webpack-howto/blob/master/README-zh.md) | 上面入门文档的汉化版 
[webpack入门指迷](https://segmentfault.com/a/1190000002551952) | segmentfault 上的一篇文章，讲了几个常用插件，建议去每个插件的 github 页面看文档，更详细页更正确
[webpack官方文档](http://webpack.github.io/docs/) | 非常详细，不过 plugin 或 loader 的问题还是建议去他们的 github 页面看
[基于webpack搭建前端工程解决方案探索](https://segmentfault.com/a/1190000003499526) | 基于 webpack 的环境搭建、目录结构、资源管理等
[webpack使用优化](http://www.alloyteam.com/2016/01/webpack-use-optimization/) | 腾讯前端团队的博客文章
[webpack-demos 阮一峰](https://github.com/ruanyf/webpack-demos) | 大神阮一峰的 webpack 配置及使用 demo，涉及了开发过程中常用的 plugin、loader、chunk 等的使用与配置
[react-hot-loader(react代码热替换)](http://gaearon.github.io/react-hot-loader/getstarted/) | 开发react一定要装的一个loader，类似gulp里常用的的browserSync，配合其他loader功能更强



###代码编辑器

<h4 id="sublime">sublime</h4>

 > 前端用的最多的代码编辑器（除了 webstrom 外）

 名称 | 备注/说明 
 ----- | ----- 
[Sublime Text下载、使用教程、插件推荐说明、全套快捷键](http://www.ferecord.com/sublimetext3.html) | 我自己的博客文章，当时总结的很详细
[package control](https://packagecontrol.io/) | sublime 的插件网站，所有的插件、主题等都在上面了，善用插件会让编辑器变得强大无比，节省生命，增加开发愉悦感
[emmet 快捷键文档](http://docs.emmet.io/cheat-sheet/) | emmet 的快捷键文档，极大提升敲代码速度 
