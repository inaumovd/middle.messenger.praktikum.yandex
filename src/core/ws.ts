import { Store } from './store'

class SocketChat {
  public messages: any
  private socket: WebSocket | undefined
  private static _instance: SocketChat | undefined
  private store: Store<any>
  constructor() {
    if (SocketChat._instance) {
      return SocketChat._instance
    }
    SocketChat._instance = this
  }

  start(token: string, userId: number, chatId: number, callback?: () => any) {
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
    )

    socket.addEventListener('open', () => {
      // this.getOldMessages(0)
      console.log('Соединение установлено')
      callback && callback()
    })

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто')
      } else {
        console.log('Обрыв соединения')
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`)
    })

    socket.addEventListener('message', (event) => {
      const store = new Store()
      this.store = store
      const parsedRes = JSON.parse(event.data)

      console.log('Получены данные', event.data)
      if (Array.isArray(parsedRes)) {
        this.store.dispatch({ messages: parsedRes })
      } else {
        this.store.dispatch({
          messages: [...this.store.getState().messages, parsedRes],
        })
      }
    })

    socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message)
    })

    this.socket = socket
  }

  message(message: string) {
    this?.socket?.send(
      JSON.stringify({
        content: message,
        type: 'message',
      }),
    )
  }

  getOldMessages(offset: number) {
    this?.socket?.send(
      JSON.stringify({
        content: offset,
        type: 'get old',
      }),
    )
  }
}

export default SocketChat
