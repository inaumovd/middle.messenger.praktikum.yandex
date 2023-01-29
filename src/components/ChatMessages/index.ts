import Block from '../../core/Block'
import template from 'bundle-text:./chatMessages.hbs'

import './chatMessages.scss'

interface ChatMessagesProps {
  text?: string
  onClick?: () => void
}

class ChatMessages extends Block {
  constructor({ text, onClick }: ChatMessagesProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default ChatMessages
