import Block from '../../core/Block'
import template from 'bundle-text:./chatItem.hbs'

import './chatItem.scss'

interface ChatItemProps {
  text?: string
  onClick?: () => void
}

class ChatItem extends Block {
  static componentName = 'ChatItem'
  constructor({ text, onClick }: ChatItemProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default ChatItem
