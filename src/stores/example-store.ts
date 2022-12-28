import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0);

  const getters = {};

  const actions = {
    doubleCount: () => counter.value * 2,
  };

  // 注意：refは直接returnしてください
  return {
    counter,
    getters,
    actions,
  };
});
