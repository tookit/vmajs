---
title: Cascader Select
desc: A  common description here 
layout: Article
lang: en-US
date: "2020-09-12"
tags:
- Laravel
- REST API
---


## Cascader Select

Cascade selection box. 

## Usage

<v-example file="ex-cascader" lang="js"> </v-example>


``` js
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

## Playground

## API

|   Name    |  Type   | Default | Required? | Description                                        |
| :-------: | :-----: | :-----: | :-------: | -------------------------------------------------- |
|   items   |  Array  |   []    |     Y     | A nested data set                                  |
| itemValue | String  |  value  |     N     | Set property of items’s value - must be primitive. |
| itemText  | String  |  value  |     N     | Set property of items’s text value                 |
| outlined  | Boolean |  false  |     N     | Applies the outlined style to the input            |
|   label   | String  |  null   |     N     | Set input's label                                  |


