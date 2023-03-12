import Block from 'core/Block'

import './chatMainHeader.scss'
import { HTTPTransport } from '../../core/api'
import { withStore } from '../../utils/withStore'

class ChatMainHeader extends Block {
  static componentName = 'ChatMainHeader'
  constructor(props) {
    super(props)

    this.setProps({
      onAddUserClick: () => this.onAddUserClick(),
      onDeleteUserClick: () => this.onDeleteUserClick(),
      onDeleteUserInput: (e: InputEvent) => this.onDeleteUserInput(e),
      onAddUserInput: (e: InputEvent) => this.onAddUserInput(e),
      onInput: (e: InputEvent) => this.onInput(e),
      deleteUserId: '',
      addUserId: '',
    })
  }

  onDeleteUserInput(e: InputEvent) {
    this.refs.deleteUserIdInputRef.refs.errorRef.setProps({
      deleteUserId: '',
    })
  }

  onAddUserInput(e: InputEvent) {
    this.refs.addUserIdInputRef.refs.errorRef.setProps({
      deleteUserId: '',
    })
  }

  onAddUserClick() {
    const addUserIdEl = this.refs.addUserIdInputRef
      .getContent()
      .querySelector('input[name="addUserId"]') as HTMLInputElement

    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats/users'
    api
      .put(host, {
        data: {
          users: [Number(addUserIdEl.value)],
          chatId: this.props.store.getState().currentChat,
        },
        headers: { 'content-type': 'application/json' },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('Пользователь добавлен')
        }
      })
  }

  onDeleteUserClick() {
    const deleteUserIdEl = this.refs.deleteUserIdInputRef
      .getContent()
      .querySelector('input[name="deleteUserId"]') as HTMLInputElement

    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/chats/users'
    api
      .delete(host, {
        data: {
          users: [Number(deleteUserIdEl.value)],
          chatId: this.props.store.getState().currentChat,
        },
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
                {{{ControlledInput
                  name="addUserId"
                  placeholder="UserId"
                  type="userId"
                  onInput=onAddUserInput
                  ref="addUserIdInputRef"
                }}}
              </div>
          </div>
          <div class="chat-button-wrapper">
            {{{Button
              text='Удалить юзера'
              onClick=onDeleteUserClick
            }}}
            <div class="chat-input-wrapper">
              {{{ControlledInput
                name="deleteUserId"
                placeholder="UserId"
                type="userId"
                onInput=onDeleteUserInput
                ref="deleteUserIdInputRef"
              }}}
            </div>
          </div>
			</div>
		`
  }
}

export default withStore(ChatMainHeader)
