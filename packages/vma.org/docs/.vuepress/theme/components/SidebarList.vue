<template>
  <v-list-item-group v-model="$page.path">
    <v-list-item v-for="item in pages" :key="item.key" :value="item.path" :href="item.path">
      <v-list-item-icon v-if="item.frontmatter.icon">
        <v-icon color="primary">{{ item.frontmatter.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>      
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
