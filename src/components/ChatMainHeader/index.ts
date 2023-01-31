import Block from 'core/Block'

import './chatMainHeader.scss'

class ChatMainHeader extends Block {
  static componentName = 'ChatMainHeader'
  constructor() {
    super()
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
