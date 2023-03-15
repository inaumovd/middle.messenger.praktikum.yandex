import { registerComponent } from './core'

import './styles/styles.scss'

import {
  ChatItem,
  ChatMain,
  ChatSidebar,
  SearchInput,
  ChatMainHeader,
  DottedButton,
  ChatMessages,
  AddFileButton,
  RoundedButton,
  SendMessageInput,
  BackBar,
  Input,
  LinkButton,
  Button,
  Error,
  ControlledInput,
  NavLinkButton,
  ChatMessage,
} from './components'

import {
  ChatPage,
  Page404,
  Page500,
  LoginPage,
  RegisterPage,
  SettingsPage,
  NavPage,
  ChangePassword,
  ChangeUserpic,
} from './pages'

import Router from './core/Router'
import { Store } from './core/store'
import { AuthApi } from './services/auth'

registerComponent(LinkButton)
registerComponent(BackBar)
registerComponent(ChatSidebar)
registerComponent(ChatItem)
registerComponent(ChatMain)
registerComponent(SearchInput)
registerComponent(ChatMainHeader)
registerComponent(DottedButton)
registerComponent(ChatMessages)
registerComponent(AddFileButton)
registerComponent(SendMessageInput)
registerComponent(RoundedButton)
registerComponent(Input)
registerComponent(Button)
registerComponent(Error)
registerComponent(ControlledInput)
registerComponent(NavLinkButton)
registerComponent(ChatMessage)

document.addEventListener('DOMContentLoaded', () => {
  const router = new Router()

  const store = new Store({ chatsList: null })
  const authApi = new AuthApi()
  authApi.userInfo()
  window.store = store

  const routes = [
    {
      path: '/login',
      block: LoginPage,
    },
    {
      path: '/sign-up',
      block: RegisterPage,
    },
    {
      path: '/messenger',
      block: ChatPage,
    },
    {
      path: '/settings',
      block: SettingsPage,
    },
    {
      path: '/404',
      block: Page404,
    },
    {
      path: '/500',
      block: Page500,
    },
    {
      path: '/',
      block: NavPage,
    },
    {
      path: '/change-password',
      block: ChangePassword,
    },
    {
      path: '/change-userpic',
      block: ChangeUserpic,
    },
  ]

  routes.forEach((route) => {
    router.use(route.path, route.block)
  })

  router.start()
})
