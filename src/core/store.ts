import EventBus from './EventBus'

export type Dispatch<State> = (
  nextStateOrAction: Partial<State> | Action<State>,
  payload?: any,
) => void

export type Action<State> = (
  dispatch: Dispatch<State>,
  state: State,
  payload: any,
) => void

export class Store<State extends Record<string, any>> extends EventBus {
  private state: State = {} as State

  private static __instance: Store<any>

  constructor(defaultState?: State) {
    super()

    if (Store.__instance) {
      return Store.__instance
    }

    Store.__instance = this

    this.state = defaultState
    this.set(defaultState)
  }

  public getState() {
    return this.state
  }

  public set(nextState: Partial<State>) {
    const prevState = { ...this.state }

    this.state = { ...this.state, ...nextState }

    this.emit('changed', prevState, nextState)
  }

  dispatch(nextStateOrAction: Partial<State> | Action<State>, payload?: any) {
    console.log('SET', nextStateOrAction)
    if (typeof nextStateOrAction === 'function') {
      nextStateOrAction(this.dispatch.bind(this), this.state, payload)
    } else {
      this.set({ ...this.state, ...nextStateOrAction })
    }
  }
}
