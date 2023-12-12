import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/* Default code when importing Pinia

  export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  
return { count, doubleCount, increment }
})*/

  
  export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
      count:0
    })
  })


