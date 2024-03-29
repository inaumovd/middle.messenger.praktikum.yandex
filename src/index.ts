import { renderDOM, registerComponent } from './core'

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
} from './components'

import {
  ChatPage,
  Page404,
  Page500,
  LoginPage,
  RegisterPage,
  SettingsPage,
  NavPage,
} from './pages'

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

// Временный роутер
const getPage = () => {
  const currentRoute = window.location.href
    .toString()
    .split(window.location.host)[1]

  const routes = [
    {
      path: '/login',
      page: LoginPage,
    },
    {
      path: '/register',
      page: RegisterPage,
    },
    {
      path: '/chat',
      page: ChatPage,
    },
    {
      path: '/settings',
      page: SettingsPage,
    },
    {
      path: '/404',
      page: Page404,
    },
    {
      path: '/500',
      page: Page500,
    },
  ]
  let currentPage = NavPage

  routes.forEach((route) => {
    if (route.path === currentRoute) {
      // @ts-ignore
      currentPage = route.page
    }
  })

  return currentPage
}
const Page = getPage()

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Page())
})
