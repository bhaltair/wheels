1. 设计稿的单位是px，一般是 750px(375pt)。
2. 限制用rem，rem的html font-size用100px
3. 750px的设计图以375px量长宽，例如设计图里有元素宽度是100px，那么得到宽度会是 100px/2/100px = 0.5rem. 

> 并非所有单位都要转换成rem，比如字体大小，通常情况下仍然用px来设置，还有一些容器内的元素用百分比也是OK的。

## 自动转换rem插件
推荐一个插件postcss-pxtorem 设置好rootValue后 直接写px就会自动转换成rem了。