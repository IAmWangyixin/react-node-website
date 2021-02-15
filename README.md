**使用reset.css目的，使标签在不同的浏览器上boder/margin/padding等间距一致**

能使用redux就使用redux存储数据

facebook
immutable.js
immutable对象


## 单页应用
网站只加载一次html
当使用a标签跳转时，会再次加载html，这个动作很耗时且没有必要。
使用react-router-dom 中的link代替a标签。

## 遇到的问题
router在render容器时报错，改用component并用函数加载
函数组件如何获取动态页面路由——react-router-dom 的withRouter解决。