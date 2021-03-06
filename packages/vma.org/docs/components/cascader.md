---
title: Cascader Select
desc: A  common description here 
layout: Article
lang: en-US
icon: mdi-form-select
date: "2020-09-12"
category: components
meta:
  - name: description
    content: A material cascader select component
  - name: keywords
    content: material cascader, multiple select, vuetify select
---


## Cascader Select

Cascade selection box. 
A common use will be select a sub caegory in a nested categories



## Install

```js
yarn add @tookit/vma

```


## Usage

``` js

import { VCascader } from '@tookit/vma'

<v-cascader :items="items" >

```


## Playground

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

