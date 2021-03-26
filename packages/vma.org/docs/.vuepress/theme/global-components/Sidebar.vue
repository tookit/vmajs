<template>
  <v-navigation-drawer class="app--drawer" app clipped>
    <v-list>
      <v-subheader>Components</v-subheader>
      <v-list-item-group v-model="$page.path">
        <v-list-item v-for="item in componentPage" :key="item.key" :value="item.path" :href="item.path">
          <v-list-item-icon v-if="item.frontmatter.icon">
            <v-icon color="primary">{{ item.frontmatter.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
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
      console.log(this.$route)
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
