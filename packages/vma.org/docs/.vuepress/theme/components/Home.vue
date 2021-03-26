<template>
  <v-main>
    <section class="home--section section">
      <v-container>
        <v-row>
          <v-col cols="6">
            <h1 class="mb-3 mt-3 display-1">{{ siteTitle }}</h1>
            <h3 class="title mt-3 mb-3">{{ siteDesc }}</h3>
            <v-btn target="_blank" class="mr-3" color="primary" large href="http://vma.isocked.com/" tile>
              Preview
            </v-btn>
            <v-btn  large :href="startUrl" tile>
              Getting Started
            </v-btn>            
          </v-col>
          <v-col :cols="6">
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
              >

                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                >
                  <v-img :src="slide" />
                </v-carousel-item>
              </v-carousel>            
          </v-col>          
        </v-row>
      </v-container>
    </section>
    <Content custom />
  </v-main>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      isSidebarOpen: true
    }
  },
  computed: {
    slides() {
      return [
        '/img/preview.png',
        '/img/media.png',
        '/img/custom_option.png'
      ]
    },
    startUrl() {
      return '/intro/quick-start.html'
    },
    siteTitle() {
      return this.$site.locales[this.$localePath].title || this.$site.title
    },
    siteDesc() {
      return (
        this.$site.locales[this.$localePath].description ||
        this.$site.description
      )
    }
  },
}
</script>
