import Block from 'core/Block'

import './chatMessages.scss'

class ChatMessages extends Block {
  static componentName = 'ChatMessages'
  constructor() {
    super()
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="chat-messages">
    <span class="chat-messages_date">19 июня</span>
    <div>
        <ul class="chat-messages_list">
            <li class="chat-messages_list-item chat-messages_list-item--partner">
                <div class="chat-messages_message-wrapper chat-messages_message-wrapper--partner">
                    <span class="chat-messages_message-text">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue
                    </span>
                    <span class="chat-messages_message-time">
                        11:56
                    </span>
                </div>
            </li>

            <li class="chat-messages_list-item chat-messages_list-item--my">
                <div class="chat-messages_message-wrapper chat-messages_message-wrapper--my">
                    <span class="chat-messages_message-text">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue
                    </span>
                    <span class="chat-messages_message-time">
                        11:56
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>`
  }
}

export default ChatMessages
