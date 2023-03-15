import Block from 'core/Block'

import './chatMain.scss'
import SocketChat from '../../core/ws'

class ChatMain extends Block {
  static componentName = 'ChatMain'
  private chat: SocketChat
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
    })

    this.chat = new SocketChat()
  }

  onSubmit() {
    const messageInputEl =
      this.refs.messageInputRef.getContent() as HTMLInputElement

    if (messageInputEl.value) {
      this.chat.message(messageInputEl.value)
    }
  }

  protected render(): string {
    // language=hbs
    return `
			<div class="chat-main">
    		{{{ChatMainHeader}}}
    		{{{ChatMessages}}}
    		<div class="chat-main_footer">
        	{{{SendMessageInput
            name='message'
            onInput=onInput
            ref="messageInputRef"
            text='Сообщение'
          }}}
        	{{{RoundedButton
            onClick=onSubmit
          }}}
    		</div>
			</div>
		`
  }
}

export default ChatMain
