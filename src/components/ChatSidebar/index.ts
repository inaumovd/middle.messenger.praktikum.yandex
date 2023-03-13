import Block from 'core/Block'

import './chatSidebar.scss'
import { withRouter } from '../../utils/withRouter'
import { HTTPTransport } from '../../core/api'
import { withStore } from '../../utils/withStore'
import { Store } from '../../core/store'
import Router from '../../core/Router'
import {
  getChatsApiCall,
  onLogoutApiCall,
  onPostChatApiCall,
} from '../../services/apiCalls'

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
    onLogoutApiCall(() => {
      this.props.router.go('/')
    })
  }

  onCreateChatClick() {
    onPostChatApiCall(
      {
        data: { title: 'New chat' },
        headers: { 'content-type': 'application/json' },
      },
      () => {
        getChatsApiCall((payload) => {
          this.props.store.dispatch({ chatsList: payload })
        })
      },
    )
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
