<template>
  <v-menu v-model="showMenu" :close-on-content-click="false" offset-y tile>
    <template #activator="{ on, attrs }">
      <v-text-field
        ref="text"
        v-bind="attrs"
        :label="label"
        :placeholder="placeholder"
        hide-details
        readonly
        append-icon="mdi-chevron-down"
        :value="inputValue"
        :dense="dense"
        :outlined="outlined"
        :clearable="clearable"
        @click:clear="handleClickClearable"
        v-on="on"
      />
    </template>
    <v-sheet class="d-flex">
      <template v-for="(children, dep) in childrens">
        <v-cascader-item
          :key="dep + 1"
          :items="children"
          :depth="dep"
          :dense="dense"
          :value="selectedItems[dep]"
          :multiple="multiple"
          :item-text="itemText"
          :item-value="itemValue"
          @select="handleItemSelect"
        />
      </template>
    </v-sheet>
  </v-menu>
</template>
<script>
import { findPath } from 'n-ary-tree'
import { VMenu, VTextField, VSheet } from 'vuetify/lib/components/'
import VCascaderItem from './VCascaderItem.vue'
export default {
  name: 'VCascader',
  components: {
    VMenu,
    VTextField,
    VSheet,
    VCascaderItem,
  },
  props: {
    items: Array,
    label: String,
    placeholder: String,
    name: String,
    dense: Boolean,
    outlined: Boolean,
    multiple: Boolean,
    clearable: Boolean,
    returnObject: Boolean,
    childrenKey: {
      type: String,
      default: 'children',
    },
    seperator: {
      type: String,
      default: ' / ',
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    value: {
      type: [Array, Number, String],
      default: () => [],
    },
  },
  data() {
    return {
      showMenu: false,
      currentDepth: 0,
      selectedItems: [],
      childrens: [this.items], // [[],[]]
    }
  },
  computed: {
    inputValue() {
      const input = this.selectedItems
        .filter((item) => item !== null)
        .map((item) => item[this.itemText])
        .join(this.seperator)
      return input
    },
  },
  watch: {
    value: {
      handler(val) {
        this.initValue(val)
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    initValue(val) {
      this.selectedItems = this.findPath(val)
    },

    findPath(val) {
      if (val) {
        let path = []
        this.items.forEach((item) => {
          const temp = findPath(item, val, {
            value: this.itemValue,
            children: this.childrenKey,
          })
          if (temp.length > 0) {
            path = temp
          }
        })
        return path
      } else {
        return []
      }
    },
    computeValue() {
      const value = this.multiple
        ? this.selectedItems.map((item) => item[this.itemValue])
        : this.selectedItems[this.selectedItems.length - 1][this.itemValue]
      return value
    },
    // rebuild
    handleItemSelect({ item, depth }) {
      const childrens = item[this.childrenKey]
      this.$set(this.selectedItems, depth, item)
      // reset all grand child
      const grandDep = depth + 1
      this.$set(this.childrens, grandDep, childrens) // make array reactive
      for (let i = 0; i < this.childrens.length; i++) {
        if (i > grandDep) {
          this.childrens[i] = []
        }
      }
      this.childrens = this.childrens.filter((item) => item && item.length > 0)
      for (let i = 0; i < this.selectedItems.length; i++) {
        if (i > depth) {
          this.selectedItems[i] = null
        }
      }
      this.selectedItems = this.selectedItems.filter((item) => item !== null)
      this.$emit('input', this.computeValue())
    },
    handleClickClearable() {
      this.$emit('input', null)
    },
  },
}
</script>
