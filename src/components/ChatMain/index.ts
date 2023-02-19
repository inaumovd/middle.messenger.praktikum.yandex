import Block from 'core/Block'

import './chatMain.scss'

class ChatMain extends Block {
  static componentName = 'ChatMain'
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
    })
  }

  onSubmit() {
    const messageInputEl =
      this.refs.messageInputRef.getContent() as HTMLInputElement

    if (messageInputEl.value) {
      console.log('send message request ->', messageInputEl.value)
    }
  }

  protected render(): string {
    // language=hbs
    return `
			<div class="chat-main">
    		{{{ChatMainHeader}}}
    		{{{ChatMessages}}}
    		<div class="chat-main_footer">
        	{{{AddFileButton}}}
        	{{{SendMessageInput
            name='message'
            onInput=onInput
            ref="messageInputRef"
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
