import Block from 'core/Block'
import template from 'bundle-text:./chatMessages.hbs'

import './chatMessages.scss'

class ChatMessages extends Block {
  static componentName = 'ChatMessages'
  constructor() {
    super()
  }

  protected render(): string {
    return template
  }
}

export default ChatMessages
