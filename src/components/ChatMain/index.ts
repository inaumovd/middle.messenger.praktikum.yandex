import Block from '../../core/Block'

import './chatMain.scss'

interface ChatMainProps {
  text?: string
  onClick?: () => void
}

class ChatMain extends Block {
  constructor({ text, onClick }: ChatMainProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return `
			<div class="chat-main">
    		{{{ChatMainHeader}}}
    		{{{ChatMessages}}}
    		<div class="chat-main_footer">
        	{{{AddFileButton}}}
        	{{{SendMessageInput}}}
        	{{{RoundedButton}}}
    		</div>
			</div>
		`
  }
}

export default ChatMain
