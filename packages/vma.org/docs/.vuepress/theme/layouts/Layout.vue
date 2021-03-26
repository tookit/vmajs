<template>
  <v-app dark>
    <Header @toogle:sidebar="handleToggleSidebar" />
    <Sidebar v-if="element !== 'Home'" ref="sidebar" />
    <ClientOnly>
      <component :is="element"></component>
    </ClientOnly>

    <Footer />
    <Fab />
  </v-app>
</template>

<script>
import Home from '@theme/components/Home'
import Article from '@theme/components/Article'
import Category from '@theme/components/Category'
import Timeline from '@theme/components/Timeline'

export default {
  components: { Home, Article, Category, Timeline },
  data() {
    return {
      showDrawer: true,
      showToc: true,
    }
  },
  computed: {
    element() {
      const { layout, home } = this.$page.frontmatter
      return home === true ? 'Home' : layout || 'Article'
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'sidebar-open': this.shouldShowSidebar && this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar,
        },
        userPageClass,
      ]
    },
  },
  mounted() {
    this.$vuetify.lang.current = this.$lang
  },
  created() {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  },
  methods: {
    handleToggleSidebar() {
      const sidebar = this.$refs.sidebar
      sidebar.showDrawer = !sidebar.showDrawer
    },
  },
}
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
