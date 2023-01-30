import Block from '../../core/Block'

import './chatMainHeader.scss'

interface ChatMainHeaderProps {
  text?: string
  onClick?: () => void
}

class ChatMainHeader extends Block {
  static componentName = 'ChatMainHeader'
  constructor({ text, onClick }: ChatMainHeaderProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return `
			<div class="chat-header">
	      <div class="chat-header_user-info">
	        <div class="chat-header_userpic-wrapper">
	            <!--            <img alt="userpic">-->
	        </div>
	        <span>Вадим</span>
	      </div>
    		{{{DottedButton}}}
			</div>
		`
  }
}

export default ChatMainHeader
