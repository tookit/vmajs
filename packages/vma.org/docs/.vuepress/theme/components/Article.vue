<template>
  <v-main class="article__content" :class="tocClass">
    <v-container>
      <v-row>
        <v-col cols="12">
          <Content custom class="article content" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-row no-gutters>
      <v-col v-for="item in related" :key="item.key" :lg="6" :cols="6">
        <v-card>
          <v-list two-line class="pa-0">
            <v-list-item :to="item.path">
              <v-list-item-avatar color="primary" tile>
                <span class="white--text">
                  {{ item.title.charAt(0) }}
                </span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.frontmatter.date }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <template v-if="!showToc">
      <v-btn small fab dark fixed tile right="right" class="btn_toc" color="primary" @click="showToc = true">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
    </template>
    <template v-else>
      <v-navigation-drawer v-model="showToc" style="padding-top: 64px" right fixed clipped width="200px">
        <Toc />
      </v-navigation-drawer>
    </template>
  </v-main>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      showDrawer: true,
      showToc: this.$vuetify.breakpoint.lgAndUp ? true : false,
    }
  },
  computed: {
    tocClass() {
      return {
        article_toc: this.showToc && this.$vuetify.breakpoint.lgAndUp,
      }
    },
    tags() {
      const { frontmatter } = this.$page
      return frontmatter.tags || ['Default']
    },
    related() {
      return this.$site.pages.filter((page) => {
        const { frontmatter } = page
        return (
          frontmatter.category === this.$frontmatter.category &&
          frontmatter.layout !== 'Category' &&
          this.$lang === frontmatter.lang &&
          page.key !== this.$page.key
        )
      })
    },
  },
  methods: {
    handleToggleSideBar() {
      this.showDrawer = !this.showDrawer
    },
    handleGoBack() {
      this.$router.go
    },
  },
}
</script>
