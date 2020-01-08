# wzj-marquee 文字跑马灯

用户文字左右滚动展示组件。

## 基本用法

```html
<wzj-marquee> </wzj-marquee>
```

## 设置滚动内容和速度

```html
<wzj-marquee :content="跑马灯内容" :speed="30"> </wzj-marquee>
```

## click 事件

```html
<wzj-marquee @click="onClick"> </wzj-marquee>
```

```javascript
export default {
  methods: {
    onClick() {
      console.log('触发点击事件');
    }
  }
};
```

## Prop

| 字段    | 说明                         | 类型   | 默认值 |
| -------- | ---------------------------- | ------ | ------ |
| content | 设置滚动文字             | String |    |
| speed | 设置速度 | Number | 50    |
| animate   | 设置是否运行滚动           | Boolean | true     |

## Event

| 字段  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | 按钮点击时触发 | -        |
