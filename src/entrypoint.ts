import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import type { Alpine } from 'alpinejs'

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse)
  Alpine.plugin(persist)
}
