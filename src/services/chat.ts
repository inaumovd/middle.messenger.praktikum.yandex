import { HTTPTransport } from '../core/api'
import { AppState, Store } from '../core/store'
import SocketChat from '../core/ws'

export class ChatApi extends HTTPTransport {
  private store: Store<AppState>
  private chat: SocketChat
  constructor() {
    super()

    this.store = new Store()
    this.chat = new SocketChat()
  }

  getChats() {
    this.get('chats').then((res) => {
      if (res.status === 200) {
        const parsedRes = JSON.parse(res.response)
        this.store.dispatch({ chatsList: parsedRes })
      }
    })
  }

  openChat(chatId: number) {
    this.post(`chats/token/${chatId}`).then((res) => {
      if (res.status === 200) {
        const parsedRes = JSON.parse(res.response)
        const onOpenChat = () => {
          this?.chat?.getOldMessages(0)
        }

        this.chat.start(
          parsedRes.token,
          this.store.getState().user.id,
          chatId,
          onOpenChat,
        )
      }
    })
  }

  createChat(chatTitle: string) {
    this.post(`chats`, {
      data: {
        title: chatTitle,
      },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        this.getChats()
      }
    })
  }

  addUser(userId: number, chatId: number) {
    this.put(`chats/users`, {
      data: {
        users: [userId],
        chatId: chatId,
      },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        console.log('Пользователь добавлен')
      }
    })
  }

  deleteUser(userId: number, chatId: number) {
    this.delete(`chats/users`, {
      data: {
        users: [userId],
        chatId: chatId,
      },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        console.log('Пользователь удален')
      }
    })
  }
}
