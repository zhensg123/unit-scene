# 项目启动 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

 
 ### 何为母场景

在教育学中，母题是各门学科包含若干知识点的基本题、典型题，也是中高考命题所参照的**原型题**。最后这点原型题是重点。

母场景也是原型场景，可以演变出同类多个场景。

每个人的母场景是不同的，这个是我整理的而已。

 ### 场景划分要求

 不管是展示，交互还是反馈一定是dom实体：至少有html和css。

 ### 划分原则

将导航划分到展示而不是交互，是因为分类的原则是看最优先那个目的。导航的第一目的就是展示数据，其次才是交互所以放在展示里。

又比如按钮首先也是展示，但按钮的第一目的是为了交互，所以放在交互分类。放在交互里的还有自制水平滚动条。还有input和textarea等。


### 整理原则

只去实现最核心那部分，实际开发为了符合业务要求，可以通过以下几种规则去演变实现。


#### 向内传入

1. 占位slot
2. 传值prop
3. 外部属性$attrs


#### 内部逻辑

1. v-for
2. v-if
3. v-show
4. v-model
5. v-bind
6. v-on
7. v-text
8. v-html
9. watch
10. computed
11. class
12. style
13. methods
14. transition
15. data
16. h渲染函数
17. jsx


等。

#### 作为一个对象存在

1. $refs

#### 向外传递

1. $emit
2. 作用域插槽slotScope


以上是一种分析组件或者分析框架的一种模型。