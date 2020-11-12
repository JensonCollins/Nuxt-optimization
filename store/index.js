export const state = () => ({
    locales: ['en', 'pt-br', 'es'],
    locale: 'en',
    visibleHeaderAndFooter: true
  })

export const mutations = {
    SET_LANG (state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    },
    setVisibleHeaderAndFooter(state, visible) {
      state.visibleHeaderAndFooter = visible;
    }
}

export const getters = {
  getVisibleHeaderAndFooter(state) {
    return state.visibleHeaderAndFooter
  }
}
