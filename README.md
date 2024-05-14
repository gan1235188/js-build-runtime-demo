#### 背景

之前在看《你不知道的JavaScript》的时，作者在`7.6`节提到**特性测试**

> 什么是特性测试?就是一种由你运行的用来判断一个特性是否可用的测试。 
>
> ....
>
> 但是如何测试涉及新语法的特性呢?
>
> 可能你会想到使用像下面这样的代码:
>
> ```javascript
>  try {
>     a = () => {};
>     ARROW_FUNCS_ENABLED = true;
> } catch (err) {
>     ARROW_FUNCS_ENABLED = false;
> }
> ```
>
> 不幸的是，这行不通，因为我们的 JavaScript 程序是需要编译的。所以，如果引擎还不支持ES6箭头函数的话，就会停在() => {}语法处。这样你程序中的一个语法错误会使其 无法运行，你的程序也就无法根据特性是否被支持而作出不同的反应。 
>
> ....
>
> 我们直接跳到使用 eval(..) 怎么样?
> 还没那么快，参见本系列《你不知道的 JavaScript(上卷)》第一部分，其中介绍了为什么 
>
> eval(..) 不是一个好主意。但是还有一种缺点少一些的选择:Function(..) 构造器。 考虑: 
>
> ```javascript
> try {
>     new Function( "( () => {} )" );
>     ARROW_FUNCS_ENABLED = true;
> } catch (err) {
>     ARROW_FUNCS_ENABLED = false;
> }
> ```
>
> 好吧，现在我们就是在通过元编程确定像箭头函数这样的特性是否能在当前引擎上编译。 

看到这里，我脑海中出现了一个想法：是否能利用特性测试获取浏览器的特性，并据此动态的打包js代码？

基于这个想法，有了下面这篇文章。



#### 先看demo

首先，我们先看一下demo。效果截图（在chrome上，打包前后的代码对比）：

![demo](https://i.imgur.com/ZPyHZbA.png)

**运行**：

1. npm i
2. npm run demo
3. 更改source-code/index.js的代码
4. 然后在不同浏览器查看效果



#### 原理

*打包的原理非常简单：babel的每一种转化都是由一个单独的plugin来控制。我们根据浏览器特性生成babel的plugin数组，就可以生成兼容浏览器的js代码。*

然而，在这个根本的构建原理之上，仍然有一些运行流程需要我们知道。

以js-build-by-feature-map-express-service(简称service)来说明运行过程：

1. service依赖js-build-by-feature-map、js-feature-test和express
2. js-build-by-feature-map依赖js-build-by-feature-map-loader
3. service根据配置，使用express监听js请求和html请求
4. 当service.js接收到一个html请求以后，会判断请求头里面的referrer字段和cookie里是否带有jsFeatureMap。在满足referrer不是js-feature-test以及jsFeatureMap不存在的条件下，自动将请求转发到js-feature-test页面
5. js-feature-test页面会使用js-feature-test依赖里面的代码对浏览器的feature做测试，并将结果存放在cookie中。然后跳转回之前的页面
6. service.js重新接收到html请求并获取到cookie里面的jsFeatureMap，然后使用express的static返回html给浏览器
7. 浏览器解析html并发起js文件请求。
8. service接收到js文件请求并挂起所有js请求，然后调用js-build-by-feature-map根据featureMap对工程js代码做转化和打包。
9. js-build-by-feature-map会根据featureMap生成md5，利用md5 key对所有相同特性的请求做打包共享
10. 不同的featureMap拥有不同的打包状态和输出目录
11. 当打包完成以后，service将所有js请求利用express的static返回输出目录里面的js文件

*备注：目前，webpack的配置需要启用watch:true，否则同一个页面里面每一个js请求都会触发对工程的重新编译打包。同时，service调用配置必须启用isDifferentFile: true，将不同特性的js输出到不同目录，否者后面的打包会覆盖前面打包的输出文件。*