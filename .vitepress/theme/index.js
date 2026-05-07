// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLanding from './HomeLanding.vue'
import LegalPageLayout from './LegalPageLayout.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()

    if (frontmatter.value.layout === 'LegalPageLayout') {
      return h(LegalPageLayout)
    }

    if (frontmatter.value.layout === 'home') {
      return h(HomeLanding)
    }

    return h(DefaultTheme.Layout)
  },
  enhanceApp({ app }) {
    app.component('LegalPageLayout', LegalPageLayout)
  }
}
