import Block from 'core/Block'

import './chat.scss'
import { withStore } from '../../utils/withStore'
import { getChatsApiCall } from '../../services/apiCalls'

class ChatPage extends Block {
  public messages: any
  constructor(props) {
    super(props)

    getChatsApiCall((payload) => {
      this.props.store.dispatch({ chatsList: payload })
    })
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
