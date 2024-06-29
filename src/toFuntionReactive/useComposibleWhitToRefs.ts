import { reactive, toRefs } from 'vue';

export const useGps = () => {
  const state = reactive({
    x: 1,
    y: 2,
  });

  return toRefs(state);
};
