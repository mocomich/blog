import { proxy } from 'valtio'

type State = {
  id: string | null
  set: (id: string) => void
  reset: () => void
}

export const state = proxy<State>({
  id: null,
  set: (id: string) => {
    state.id = id
  },
  reset: () => {
    state
  }
})
