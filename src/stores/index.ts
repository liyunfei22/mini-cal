import { defineStore } from 'pinia'

export const useTabStore = defineStore('tab', {
  state: () => {
    return { tabIndex: 0 }
  },
  actions: {
    setTabIndex(index) {
      this.tabIndex = index
    },
  },
})