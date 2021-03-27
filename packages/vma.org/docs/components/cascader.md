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
    content: hello
  - name: keywords
    content: super duper SEO
---


## Cascader Select

Cascade selection box. 


## Usage

``` js

<v-cascader :items="items" >

```


## Playground

<v-example file="ex-cascader" lang="js"> </v-example>



## API

|   Name    |  Type   | Default | Required? | Description                                        |
| :-------: | :-----: | :-----: | :-------: | -------------------------------------------------- |
|   items   |  Array  |   []    |     Y     | A nested data set                                  |
| itemValue | String  |  value  |     N     | Set property of items’s value - must be primitive. |
| itemText  | String  |  value  |     N     | Set property of items’s text value                 |
| outlined  | Boolean |  false  |     N     | Applies the outlined style to the input            |
|   label   | String  |  null   |     N     | Set input's label                                  |


