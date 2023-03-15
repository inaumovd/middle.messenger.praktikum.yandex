import { HTTPTransport } from '../core/api'
import Router from '../core/Router'
import { AppState, Store } from '../core/store'

export class AuthApi extends HTTPTransport {
  private router: Router
  private store: Store<AppState>
  constructor() {
    super()

    this.router = new Router()
    this.store = new Store()
  }

  logOut() {
    this.post(`auth/logout`).then((res) => {
      if (res.status === 200) {
        this.router.go('/')
      }
    })
  }

  signIn({ login, password }: { login: string; password: string }) {
    this.post(`auth/signin`, {
      data: { login, password },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        this.userInfo()
        this.router.go('/messenger')
      }
    })
  }

  signUp({
    email,
    first_name,
    phone,
    second_name,
    password,
    login,
  }: {
    email: string
    first_name: string
    phone: string
    second_name: string
    password: string
    login: string
  }) {
    this.post(`auth/signup`, {
      data: { email, first_name, phone, second_name, password, login },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        this.userInfo()
        this.router.go('/messenger')
      }
    })
  }

  userInfo() {
    this.get('auth/user').then((res) => {
      if (res.status === 200) {
        const parsedRes = JSON.parse(res.response)
        this.store.dispatch({ user: parsedRes })
      }
    })
  }
}
