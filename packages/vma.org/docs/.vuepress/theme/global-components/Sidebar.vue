<template>
  <v-navigation-drawer class="app--drawer" app clipped>
    <v-list>
      <v-subheader>Components</v-subheader>
      <v-list-item
        v-for="item in componentPage"
        :key="item.key"
        :value="item.key"
        :to="item.path"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
    componentPage() {
      const lang = this.$lang
      return this.$site.pages.filter((item) => item.frontmatter.lang == lang)
    },
  },
  created() {},
  methods: {
    toogleSidebar() {
      this.showDrawer != this.showDrawer
    },
  },
}
</script>
