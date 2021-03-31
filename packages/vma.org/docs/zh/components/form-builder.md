---
title: 表单构建
desc: Very useful component for building vuetify forms
layout: Article
lang: zh
icon: mdi-radio-fm
date: "2021-03-22"
category: components
---


## 表单构建

封装了Veutifyjs通用的表单元素，通过配置化的方式生成表单，减少我们大量的重复工作.

## 安装

```js
yarn add @tookit/vma

```

## 简单用法

``` js

import { VFormBuilder } from '@tookit/vma'

<template>
    <v-form-builder :items="formItems" v-model="formModel"/>
</template>

const formItems =  [
    {
        cols: 6,
        element: 'v-text-field',
        props: {
        name: 'username',
        required: true,
        outlined: true,
        rules: [(v) => !!v || 'Username is required'],
        },
    }    
]
....

```

## 预览

<v-example file="ex-form-builder" lang="js"> </v-example>




## API

|    Name    |       Type       |    Default     | Required? | Description                              |
| :--------: | :--------------: | :------------: | :-------: | ---------------------------------------- |
|   items    |      Array       |       []       |     Y     | Form elements props                      |
|  element   |     [String]     |       []       |     Y     | The name of the form elements, component |
|    cols    | [String, Number] |       12       |     N     | Form element's width                     |
|   title    | [String, Number] | 'Form Builder' |     N     | Form title                               |
| showHeader |     Boolean      |     false      |     N     | Show Form header                         |


