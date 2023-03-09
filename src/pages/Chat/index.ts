import Block from 'core/Block'

import './chat.scss'
import { HTTPTransport } from '../../core/api'
import SocketChat from '../../core/ws'

class ChatPage extends Block {
  private chat: SocketChat | undefined
  public messages: any
  constructor() {
    super()

    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats'
    api.get(host).then((res) => {
      if (res.status === 200) {
        console.log(res)
      }
    })

    const host2 = 'https://ya-praktikum.tech/api/v2/auth/user'
    api.get(host2).then((res) => {
      if (res.status === 200) {
        console.log(res)
      }
    })

    const host3 = 'https://ya-praktikum.tech/api/v2/chats/token/6996'
    api.post(host3).then((response) => {
      const parsedRes = JSON.parse(response.response)
      const chat = new SocketChat()
      this.chat = chat
      this.chat.start(parsedRes.token, 612587, 6996)
      // this.messages = this.chat.getOldMessages(0)
      //
      // console.log('MESS', this.messages)
    })
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="chat-page">
          {{{ChatSidebar}}}
          {{{ChatMain}}}
        </div>
      </main>
    `
  }
}

export default ChatPage
