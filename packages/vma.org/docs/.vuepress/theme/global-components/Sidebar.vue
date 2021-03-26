<template>
  <v-navigation-drawer class="app--drawer" app clipped>
    <v-list>
      <v-subheader>Intro</v-subheader>
      <sidebar-list :pages="groups.intro" />
      <v-subheader>Components</v-subheader>
      <sidebar-list :pages="groups.components" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SidebarList from '../components/SidebarList'
export default {
  components: {
    SidebarList
  },
  props: {},
  data() {
    return {
      showDrawer: true,
    }
  },
  computed: {
    groups() {
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
