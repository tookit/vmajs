---
title: Form Builder
desc: Very useful component for building vuetify forms
layout: Article
lang: en-US
icon: mdi-radio-fm
date: "2021-03-22"
category: components
---


## Form Builder

Very useful component for building vuetify forms.

This component can make your vuetify form by configurtion, it will save u lot of time.

## Install

```js
yarn add @tookit/vma

```


## Usage

``` js

import { VFormBuilder } from '@tookit/vma'


<template>
    <v-form-builder :items="formItems" v-model="formModel"/>
</template>

```

## Playground

<v-example file="ex-form-builder" lang="js"> </v-example>




## API

|    Name    |       Type       |    Default     | Required? | Description                              |
| :--------: | :--------------: | :------------: | :-------: | ---------------------------------------- |
|   items    |      Array       |       []       |     Y     | Form elements props                      |
|  element   |     [String]     |       []       |     Y     | The name of the form elements, component |
|    cols    | [String, Number] |       12       |     N     | Form element's width                     |
|   title    | [String, Number] | 'Form Builder' |     N     | Form title                               |
| showHeader |     Boolean      |     false      |     N     | Show Form header                         |



## Event

| Name  | Description         |
| :---: | ------------------- |
| `form:submit` | Emit when form submit |
| `form:cancel` | Emit when form cancel |

