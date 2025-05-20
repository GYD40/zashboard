import { minProxyCardWidth } from '@/store/settings'
import { useCurrentElement, useElementSize } from '@vueuse/core'
import { computed } from 'vue'

export const useCalculateMaxProxies = () => {
  const el = useCurrentElement()
  const { width } = useElementSize(el)
  const maxProxies = computed(() => {
    return Math.floor(width.value / minProxyCardWidth.value) * 9
  })

  return {
    maxProxies,
  }
}
