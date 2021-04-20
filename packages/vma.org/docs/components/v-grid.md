---
title: Sortable Grid
desc: A  common description here 
layout: Article
lang: en-US
icon: mdi-table
date: "2021-03-330"
category: components
meta:
  - name: description
    content: A sortable and custom rendering function support datatable
  - name: keywords
    content: material data grid, material sortable datatable, material custom rendering grid 
---


## Sortable grid

A Grid extend `v-datatable` with sortable and custom render feature, you can reorder you data in v-datatable
and also you can define your custsom render function in `header`.


## Install

```js
yarn add @tookit/vma

```



## Usage

``` js

import { VGrid } from '@tookit/vma'

<v-grid :items="items" :headers="headers" >

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


## Playground

<v-example file="ex-grid" lang="js"> </v-example>



## API

|   Name   |  Type   | Default | Required? | Description                |
| :------: | :-----: | :-----: | :-------: | -------------------------- |
| sortable | Boolean |  false  |     N     | Control if enable sortable |



Because the component is extends from `v-datatable`,
you can check all avaiable options about `v-datable` in [v-datatable](https://vuetifyjs.com/en/components/data-tables/)

## Event

:::tip
For detail events, pls check [sortablejs](https://github.com/SortableJS/Sortable)
:::


|        Name         | Description                                              |
| :-----------------: | -------------------------------------------------------- |
|  `sortable:onSort`  | Emit by any change to the list (add / update / remove)   |
| `sortable:onChange` | Called when dragging element changes position            |
|  `sortable:onMove`  | Event when you move an item in the list or between lists |


