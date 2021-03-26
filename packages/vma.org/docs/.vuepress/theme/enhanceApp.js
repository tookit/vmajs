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
  //tab
  VTabs,
  VTab,
  VTabItem,
  VTabsItems,
  //card
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
  VListItemGroup,
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
  //form
  VTextField,
  VTextarea,
  VSwitch,
  VSelect,
  VAutocomplete
} from 'vuetify/lib'
import './style/theme.sass'
import { Ripple, Scroll } from 'vuetify/lib/directives'
import zh from '@theme/locale/zh-Hans'
import en from '@theme/locale/en'
import { VCascader, VFormBuilder } from '@tookit/vma'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
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
      //tab
      VTabs,
      VTab,
      VTabItem,
      VTabsItems,
      //card     
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
      VListItemGroup,
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
      //form
      VTextField,
      VTextarea,
      VSwitch,
      VSelect,
      VAutocomplete,
      //vma
      VCascader,
      VFormBuilder
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
  })
}
