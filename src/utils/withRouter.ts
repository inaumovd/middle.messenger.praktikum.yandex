import { Block } from 'core'
import Router from '../core/Router'

type WithRouterProps = { router: Router }

export function withRouter<P extends WithRouterProps>(WrappedBlock: Block<P>) {
  return class extends WrappedBlock<P> {
    public static componentName =
      WrappedBlock.componentName || WrappedBlock.name

    constructor(props: P) {
      super({ ...props, router: new Router() })
    }
  } as Block<Omit<P, 'router'>>
}
