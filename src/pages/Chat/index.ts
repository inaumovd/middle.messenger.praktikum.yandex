import Block from 'core/Block'

import './chat.scss'
import { HTTPTransport } from '../../core/api'
import SocketChat from '../../core/ws'
import { withStore } from '../../utils/withStore'

class ChatPage extends Block {
  private chat: SocketChat | undefined
  public messages: any
  constructor(props) {
    super(props)

    const api = new HTTPTransport()
    const host2 = 'https://ya-praktikum.tech/api/v2/auth/user'
    api.get(host2).then((res) => {
      if (res.status === 200) {
        console.log(res)
      }
    })

    const host = 'https://ya-praktikum.tech/api/v2/chats'
    api.get(host).then((res) => {
      if (res.status === 200) {
        const parsedRes = JSON.parse(res.response)
        // console.log('чаты => ', parsedRes, this.props.store.dispatch)
        this.props.store.dispatch({ chatsList: parsedRes })
        // this.chats = parsedRes
        // this.setProps({
        //   chats: parsedRes,
        // })
      }
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
