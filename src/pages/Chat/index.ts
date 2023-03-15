import Block from 'core/Block'

import './chat.scss'
import { withStore } from '../../utils/withStore'
import { AuthApi } from '../../services/auth'
import { ChatApi } from '../../services/chat'

class ChatPage extends Block {
  public messages: any
  private authApi: AuthApi
  private chatApi: ChatApi
  constructor(props) {
    super(props)

    this.authApi = new AuthApi()
    this.chatApi = new ChatApi()
    this.authApi.userInfo()
    this.chatApi.getChats()
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="chat-page">
          {{{ChatSidebar
          }}}
          {{{ChatMain}}}
        </div>
      </main>
    `
  }
}

export default withStore(ChatPage)
