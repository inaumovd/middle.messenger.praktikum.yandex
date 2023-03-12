import Block from 'core/Block'

import './chatMainHeader.scss'
import { HTTPTransport } from '../../core/api'

class ChatMainHeader extends Block {
  static componentName = 'ChatMainHeader'
  constructor() {
    super()

    this.setProps({
      onAddUserClick: () => this.onAddUserClick(),
      onDeleteUserClick: () => this.onDeleteUserClick(),
    })
  }

  onAddUserClick() {
    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats/users'
    api
      .put(host, {
        data: { users: [611426], chatId: 6645 },
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('Пользователь добавлен')
        }
      })
  }

  onDeleteUserClick() {
    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats/users'
    api
      .delete(host, {
        data: { users: [611426], chatId: 6645 },
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('Пользователь удален')
        }
      })
  }

  protected render(): string {
    // language=hbs
    return `
			<div class="chat-header">
          <div class="chat-button-wrapper">
            {{{Button
              text='Добавить юзера'
              onClick=onAddUserClick
            }}}
              <div class="chat-input-wrapper">
                {{{SendMessageInput
                  name='deleteUserId'
                  onInput=onInput
                  ref="deleteUserIdInputRef"
                  text='UserId'
                }}}
              </div>
          </div>
          <div class="chat-button-wrapper">
            {{{Button
              text='Удалить юзера'
              onClick=onDeleteUserClick
            }}}
            <div class="chat-input-wrapper">
              {{{SendMessageInput
                name='deleteUserId'
                onInput=onInput
                ref="deleteUserIdInputRef"
                text='UserId'
              }}}
            </div>
          </div>
			</div>
		`
  }
}

export default ChatMainHeader
