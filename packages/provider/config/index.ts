import type { ExtractPropTypes } from 'vue';

import { computed, defineComponent, inject, provide } from 'vue';

const globalProviderProps = {
  project: {
    type: String,
    required: true,
  },
};

export type GlobalProviderProps = ExtractPropTypes<typeof globalProviderProps>;

export const globalProviderConfigSymbol = Symbol('globalProviderConfigSymbol');
export const getGlobalProviderConfig = <T extends keyof GlobalProviderProps>(
  v: T,
) => {
  const config = inject<GlobalProviderProps>(
    globalProviderConfigSymbol,
    {} as GlobalProviderProps,
  );
  return computed(() => config[v]);
};
export const GlobalProvider = defineComponent({
  name: 'GlobalProvider',
  props: globalProviderProps,
  setup(props, { slots }) {
    provide(globalProviderConfigSymbol, props);
    return () => slots?.default?.();
  },
});
