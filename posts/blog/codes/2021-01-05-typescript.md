---
title: "typescript"
author: [Sylvenas]
categories: 'codes'
img: './img/2015-05-11.jpeg'
secert: true
---

## Interface 与 Type 的区别
### 相同点
- 都可以描述对象和函数
- 都可以扩展(api不同，interface 用 `extends`，type alias 用 `&`)

### 不同点
- 声明范围不同
  - interface 只能用来声明对象/函数等，无法用来声明 “基本属性”，比如：Number，String
  - type alias 可以用来声明所有的类型

- 扩展形式不同
  - interface 用 `extends`
  - type alias 用 `&`
- 同名重复定义
  - interface 会自动合并
  - type alias 会报错
### 如何选择
建议优先使用 interface，实在满足不了，使用 type alias

## 函数中的 `this` 
`this` 可以在 函数的第一个参数指定，编译之后，会自动去掉这个参数
``` js
var hello="window hello"

const obj={
    hello:"obj hello"
}

function fn(this: typeof obj,x:string,y:string) {
    console.log(this.hello,x,y)
}

fn.apply(obj,["1","2"])

/** 
 * 编译结果
 * 
 * function fn(x, y) {
 *   console.log(this.hello, x, y);
 * }
* /
```

### 工厂模式的函数
构造函数的类型不能直接声明为某个class，有两种解决办法，
- 1. `new (...args: any[]): T;`
- 2. `function createIns<T extends typeof Base>(Animal:T){return new Animal()}`

``` js
class Base{
    move(){
        console.log("base move")
    }
}

class Dog extends Base{
    move(){
        console.log("dog move")
    }
}

function createIns<T extends typeof Base>(Animal:T){
    return new Animal()
}

createIns(Base)
```

###  const 与 readonly 的区别？
使用 ES6 的 const 关键字声明的**值类型**
readonly 修饰某对象/class的 **属性**

### any/unknow/void/nerver
- any: 除非第一次从JS 迁移代码到TS，否则尽量不要使用any,因为这类似于在(`let someVar:any`)周围使用`@ts-ignore`
- unknow: 典型的用途如`const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);`在使用的使用 使用 `as` 推断为具体的类型：`const myUserAccount = jsonParserUnknown('{ "name": "Samuel" }') as User;`;或者在http请求中 `(response:unknown)=>{}` 
- void: 函数在没有返回值的时候使用；一个典型的应用场景是 `callback`
- nerver: 用来缩小范围，典型的用法是在`switch`中，最终的 default 中使用

``` js
enum Flower {
  Rose,
  Rhododendron,
  Violet,
  Daisy,
}

const flowerLatinName = (flower: Flower) => {
  switch (flower) {
    case Flower.Rose:
      return "Rosa rubiginosa";
    case Flower.Rhododendron:
      return "Rhododendron ferrugineum";
    case Flower.Violet:
      return "Viola reichenbachiana";
    case Flower.Daisy:
      return "Bellis perennis";

    default:
      const _exhaustiveCheck: never = flower;
      return _exhaustiveCheck;
  }
};
```


## 抽象类
- 抽象类不能实例化，只能作为其他实体类的基类
- 抽象类里的抽象方法，实体类必须实现
- 抽象类里的非抽象方法，实体类可以不实现，会自动继承