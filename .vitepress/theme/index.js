// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
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

    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('LegalPageLayout', LegalPageLayout)
  }
}
