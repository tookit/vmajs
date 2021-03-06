---
title: 拖拽表格
desc: 拖拽表格 
layout: Article
lang: zh
icon: mdi-table
date: "2021-03-330"
category: components
meta:
  - name: description
    content: 可拖拽排序，自定义render函数的数据表格
  - name: keywords
    content: material data grid, material sortable datatable, material custom rendering grid 
---


## 可拖拽表格

A Grid extend `v-datatable` with sortable and custom render feature


## 安装

```js
yarn add @tookit/vma

```

## 简单用法

``` js


import { VGrid } from '@tookit/vma'

<v-grid :items="items" :headers="headers" :sortable="true" >

// using custom rendering function
export default {
  data() {
    return {
      headers: [
        {
          text: 'Status',
          value: 'status',
          render: (item) => {
            return this.$createElement(
              'v-chip',
              {
                props: {},
              },
              item.status
            )
          },
        },
      ],
    }
  },
}
```


## 预览

<v-example file="ex-grid" lang="js"> </v-example>



## API

|  属性名  |  类型   | 默认  | 必选? | 描述             |
| :------: | :-----: | :---: | :---: | ---------------- |
| sortable | Boolean | false |   N   | 是否启用sortable |

因为此组件扩展自`v-datatable`, 
关于　`v-datatable`的属性可以参考官方文档 [v-datatable](https://vuetifyjs.com/en/components/data-tables/)

## 事件

:::tip
关于sortablejs的事件，请参考 [sortablejs](https://github.com/SortableJS/Sortable)
:::


|       事件名        | 描述                                                     |
| :-----------------: | -------------------------------------------------------- |
|  `sortable:onSort`  | Emit by any change to the list (add / update / remove)   |
| `sortable:onChange` | Called when dragging element changes position            |
|  `sortable:onMove`  | Event when you move an item in the list or between lists |


