import Block from 'core/Block'

import './chatSidebar.scss'
import { withRouter } from '../../utils/withRouter'
import { HTTPTransport } from '../../core/api'
import { withStore } from '../../utils/withStore'
import { Store } from '../../core/store'
import Router from '../../core/Router'

interface ChatSidebarProps {
  store: Store<any>
  router: Router
}

class ChatSidebar extends Block<ChatSidebarProps> {
  static componentName = 'ChatSidebar'
  constructor(props: ChatSidebarProps) {
    super(props)

    this.setProps({
      onExitClick: () => this.onExitClick(),
      onCreateChatClick: () => this.onCreateChatClick(),
      chats: this.props.store.getState().chatsList,
    })
  }

  onExitClick() {
    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/auth/logout'
    api.post(host).then((res) => {
      if (res.status === 200) {
        this.props.router.go('/')
      }
    })
  }

  onCreateChatClick() {
    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats'
    api
      .post(host, {
        data: { title: 'New chat' },
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        if (res.status === 200) {
          const host = 'https://ya-praktikum.tech/api/v2/chats'
          api.get(host).then((res) => {
            if (res.status === 200) {
              const parsedRes = JSON.parse(res.response)
              this.props.store.dispatch({ chatsList: parsedRes })
            }
          })
        }
      })
  }

  protected render(): string {
    // language=hbs
    return `
		  <div class="chat-sidebar">
        <div class="chat-sidebar_header">
          <div class="profile-button-wrapper">
            <div class="chat-button-wrapper">
              {{{Button
                onClick=onExitClick
                text='Выход'
              }}}
            </div>

            {{{Button
              onClick=onCreateChatClick
              text='Новый чат'
            }}}
          </div>
        </div>
        <ul class="chat-list">
          {{#each chats}}
            {{{ChatItem
              chat=this
            }}}
          {{/each}}
        </ul>
      </div>
		`
  }
}

export default withStore(withRouter(ChatSidebar))
