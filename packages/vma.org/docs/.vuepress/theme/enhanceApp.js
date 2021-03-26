import Vuetify, {
  VApp,
  VNavigationDrawer,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VToolbarItems,
  VMain,
  VResponsive,
  VContainer,
  VRow,
  VCol,
  VFooter,
  //
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VSheet,
  VBreadcrumbs,
  //
  VImg,
  VList,
  VListItem,
  VListItemIcon,
  VListGroup,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VListItemAction,
  VListItemAvatar,
  VBtn,
  VCheckbox,
  VBtnToggle,
  VMenu,
  VMenuTransition,
  VIcon,
  VChip,
  VTimeline,
  VTimelineItem,
  //
  VFabTransition,
  VSubheader,
  VSpacer,
  VDivider,
  VLazy,
  VExpandTransition,
  VItem,
  VWindow,
  VWindowItem,
  VItemGroup
} from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import './style/theme.sass'
import { Ripple, Scroll } from 'vuetify/lib/directives'
import zh from '@theme/locale/zh-Hans'
import en from '@theme/locale/en'
import postsMixin from '@theme/mixins/posts'
import { VCascader } from "@tookit/vma";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // console.log(siteData, options)
  Vue.use(Vuetify, {
    components: {
      VApp,
      VNavigationDrawer,
      VAppBar,
      VAppBarNavIcon,
      VToolbar,
      VToolbarTitle,
      VToolbarItems,
      VMain,
      VResponsive,
      VContainer,
      VRow,
      VCol,
      VFooter,
      //
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VSheet,
      VBreadcrumbs,
      //
      VImg,
      VList,
      VListItem,
      VListItemIcon,
      VListGroup,
      VListItemContent,
      VListItemTitle,
      VListItemSubtitle,
      VListItemAction,
      VListItemAvatar,
      VBtn,
      VCheckbox,
      VBtnToggle,
      VMenu,
      VMenuTransition,
      VIcon,
      VChip,
      VTimeline,
      VTimelineItem,
      //
      VFabTransition,
      VSubheader,
      VSpacer,
      VDivider,
      VLazy,
      VExpandTransition,
      VItem,
      VWindow,
      VWindowItem,
      VItemGroup,
      VCascader
    },
    directives: {
      Ripple,
      Scroll,
    },
  })
  options.vuetify = new Vuetify({
    lang: {
      locales: { zh, en },
      current: 'en',
    },
    theme: {
      themes: {
        light: {
          primary: colors.grey.darken4,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
        dark: {
          primary: colors.blue.lighten3,
        },
      },
    },
  })

  Vue.mixin(postsMixin)
}
