class SocketChat {
  public messages: any
  private socket: WebSocket | undefined
  private static _instance: SocketChat | undefined
  constructor() {
    if (SocketChat._instance) {
      return SocketChat._instance
    }
    SocketChat._instance = this
  }

  start(token: string, userId: number, chatId: number) {
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
    )

    socket.addEventListener('open', () => {
      this.getOldMessages(0)
      console.log('Соединение установлено')
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
      console.log('Получены данные', event.data)
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
    const messages = this?.socket?.send(
      JSON.stringify({
        content: offset,
        type: 'get old',
      }),
    )

    this.messages = messages
  }
}

export default SocketChat
