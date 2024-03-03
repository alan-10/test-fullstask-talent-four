import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    drawer: false

  }),
  actions: {
    updateDrawer() {
     this.$state.drawer = !this.$state.drawer; 
    },
   
  }
});
