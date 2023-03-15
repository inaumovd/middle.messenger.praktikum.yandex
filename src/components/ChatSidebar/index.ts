import Block from 'core/Block'

import './chatSidebar.scss'
import { withRouter } from '../../utils/withRouter'
import { withStore } from '../../utils/withStore'
import { AppState, Store } from '../../core/store'
import Router from '../../core/Router'
import { ChatApi } from '../../services/chat'
import { AuthApi } from '../../services/auth'

interface ChatSidebarProps {
  store: Store<AppState>
  router: Router
}

class ChatSidebar extends Block<ChatSidebarProps> {
  static componentName = 'ChatSidebar'
  private chatApi: ChatApi
  private authApi: AuthApi
  constructor(props: ChatSidebarProps) {
    super(props)

    this.setProps({
      onExitClick: () => this.onExitClick(),
      onCreateChatClick: () => this.onCreateChatClick(),
      onChatTitleInput: (e: InputEvent) => this.onChatTitleInput(e),
      chats: this.props.store.getState().chatsList,
    })

    this.chatApi = new ChatApi()
    this.authApi = new AuthApi()
  }

  onExitClick() {
    this.authApi.logOut()
  }

  onCreateChatClick() {
    const chatTitle = this.refs.chatTitleInputRef
      .getContent()
      .querySelector('input[name="chatTitle"]') as HTMLInputElement

    this.chatApi.createChat(chatTitle.value)
  }

  onChatTitleInput(e) {
    console.log(e)
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
            {{{ControlledInput
              name="chatTitle"
              placeholder="Chat title"
              type="chatTitle"
              onInput=onAddUserInput
              ref="chatTitleInputRef"
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
