<template>
  <v-navigation-drawer class="app--drawer" app clipped>
    <v-list>
      <template v-for="items, group in groupPages">
       <v-subheader :key="group">{{  group.toUpperCase()   }}</v-subheader>
        <v-list-item-group :key="'i' + group" v-model="$page.path">
          <v-list-item v-for="item in items" :key="item.key" :value="item.path" :href="item.path">
            <v-list-item-icon v-if="item.frontmatter.icon">
              <v-icon color="primary">{{ item.frontmatter.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>      
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  props: {},
  data() {
    return {
      showDrawer: true,
    }
  },
  computed: {
    groupPages() {
      const groupBy = require('lodash.groupby')
      const lang = this.$lang
      const pages =  this.$site.pages.filter(
        (item) => item.frontmatter.lang == lang
      )
      return groupBy(pages,'frontmatter.category')
    },
  },
  methods: {
    toogleSidebar() {
      this.showDrawer != this.showDrawer
    },
  },
}
</script>
