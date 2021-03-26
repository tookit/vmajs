<template>
  <v-app-bar dark app clipped-left>
    <v-app-bar-nav-icon v-if="!isHome" @click="$emit('toogle:sidebar')" />
    <v-toolbar-title class="ml-0 pl-3">
      <span>{{ siteTitle }}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="hidden-xs-only">
      <v-btn icon>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn v-for="item in navLinks" :key="item.text" :to="item.link" text>
        {{ item.text }}</v-btn
      >
      <LanguageSwitch :locales="locales" />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    navLinks() {
      const { nav } = this.$site.themeConfig
      return nav[this.$localePath]
    },
    isHome() {
      return this.$page.frontmatter.home
    },
    locales() {
      return this.$site.locales || this.$site.themeConfig.locales
    },
    siteTitle() {
      return this.$site.title
    },
  },
  created() {},
}
</script>

<style></style>
