import { Block, renderDOM } from './index'

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs
}

function render(block: Block): void {
  renderDOM(block)
}

class Route {
  private _pathname: string
  private _block: null | Block
  private _blockClass: any

  constructor(pathname: string, view: Block) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass()
      this._block && render(this._block)
      return
    }

    render(this._block)
  }
}

export default class Router {
  private static __instance: Router
  private routes: Route[] | undefined
  private history: History | undefined

  constructor() {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history

    Router.__instance = this
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block)
    this.routes?.push(route)

    return this
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute(event.currentTarget.location.pathname)
    }
    this._onRoute(window.location.pathname)
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname)

    if (!route) {
      return
    }

    route.render()
  }

  go(pathname: string) {
    this.history?.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back() {
    this.history?.back()
  }

  forward() {
    this.history?.forward()
  }

  getRoute(pathname: string) {
    return this.routes?.find((route) => route.match(pathname))
  }
}
