import Block from 'core/Block'

import './chatMainHeader.scss'
import { withStore } from '../../utils/withStore'
import { ChatApi } from '../../services/chat'

class ChatMainHeader extends Block {
  static componentName = 'ChatMainHeader'
  private chatApi: ChatApi
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

    this.chatApi = new ChatApi()
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

    this.chatApi.addUser(
      Number(addUserIdEl.value),
      this.props.store.getState().currentChat,
    )
  }

  onDeleteUserClick() {
    const deleteUserIdEl = this.refs.deleteUserIdInputRef
      .getContent()
      .querySelector('input[name="deleteUserId"]') as HTMLInputElement

    this.chatApi.deleteUser(
      Number(deleteUserIdEl.value),
      this?.props?.store?.getState()?.currentChat,
    )
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
