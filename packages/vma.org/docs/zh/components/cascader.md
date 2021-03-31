---
title: 级联选择
desc: A  common description here 
layout: Article
lang: zh
icon: mdi-form-select
date: "2020-09-12"
category: components
meta:
  - name: description
    content: material design 级联选择
  - name: keywords
    content: material cascader, multiple select, vuetify select
---


## 级联选择

通常用于选择多级分类


## 安装

```js
yarn add @tookit/vma

```


## 用法

``` js
import { VCascader } from '@tookit/vma'


<v-cascader :items="items" label="选择分类" >

```


## 演示

<v-example file="ex-cascader" lang="js"> </v-example>



## API

|    Name     |  Type   | Default  | Required? | Description                                        |
| :---------: | :-----: | :------: | :-------: | -------------------------------------------------- |
|    items    |  Array  |    []    |     Y     | A nested data set                                  |
|  itemValue  | String  |  value   |     N     | Set property of items’s value - must be primitive. |
|  itemText   | String  |  value   |     N     | Set property of items’s text value                 |
|  outlined   | Boolean |  false   |     N     | Applies the outlined style to the input            |
|  clearable  | Boolean |  false   |     N     | Clear the selection state                          |
|    label    | String  |   null   |     N     | Set input's label                                  |
| placeholder | String  |   null   |     N     | Set input's placeholder                            |
| childrenKey | String  | children |     N     | Specify the children key in `items`                |
