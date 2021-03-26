<template>
  <div class="toc" v-on="$listeners">
    <v-subheader>{{ $vuetify.lang.t('$vuetify.toc.title') }}</v-subheader>
    <v-divider />
    <slot name="top" />
    <v-list dense class="toc_list pa-0">
      <v-list-item
        v-for="item in $page.headers"
        :key="item.slug"
        class="toc_list__item"
        :to="computeHash(item.slug)"
      >
        <span class="body-2">
          {{ item.title }}
        </span>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    findActiveIndex() {},
    computeHash(slug) {
      return {
        path: this.$route.path,
        hash: slug,
      }
    },
  },
}
</script>
