import Block from 'core/Block'
import template from 'bundle-text:./chatItem.hbs'

import './chatItem.scss'

class ChatItem extends Block {
  static componentName = 'ChatItem'
  constructor() {
    super()
  }

  protected render(): string {
    return template
  }
}

export default ChatItem
