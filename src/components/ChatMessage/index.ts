import Block from 'core/Block'

import './chatItem.scss'

class ChatMessage extends Block {
  static componentName = 'ChatMessage'
  constructor(props) {
    super(props)
  }

  protected render(): string {
    // language=hbs
    return `
      <li class="chat-messages_list-item chat-messages_list-item--partner">
        <div class="chat-messages_message-wrapper chat-messages_message-wrapper--partner">
          <span>User:</span><span>{{message.user_id}}</span>
          <span class="chat-messages_message-text">
            {{message.content}}
          </span>
          <span class="chat-messages_message-time">
            {{message.time}}
          </span>
        </div>
      </li>
    `
  }
}

export default ChatMessage
