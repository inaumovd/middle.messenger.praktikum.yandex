import Block from 'core/Block'

import './chatItem.scss'
import { AppState, Store } from '../../core/store'
import Router from '../../core/Router'
import { withStore } from '../../utils/withStore'
import { ChatApi } from '../../services/chat'

interface ChatItemProps {
  store: Store<AppState>
  router: Router
  events: any
  chat: any
}

class ChatItem extends Block<ChatItemProps> {
  static componentName = 'ChatItem'
  private chatApi: ChatApi
  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: () => {
          this.chatApi.openChat(props.chat.id)
          props.store.dispatch({ currentChat: props.chat.id })
        },
      },
    })

    this.chatApi = new ChatApi()
  }

  protected render(): string {
    // language=hbs
    return `
    <li class="chat-list-item">
        {{chat.title}}: {{chat.id}}
    <div class="chat-list-item_container">
        <div class="chat-list-item_userpic-container">
            {{chat.last_message.user.first_name}}
        </div>
        <div class="chat-list-item_message-wrapper">
            <span class="chat-list-item_name"></span>
            <div class="chat-list-item_message-container">

                <div>
                    {{#if chat.last_message.content}}
                        <span>{{chat.last_message.content}}</span>
                    {{else}}
                        <span>В чате нет сообщений</span>
                    {{/if}}
                </div>
            </div>
        </div>
    </div>
      <div class="chat-list-item_time-wrapper">
            <span class="chat-list-item_time">{{chat.last_message.time}}</span>
      </div>
</li>

    `
  }
}

export default withStore(ChatItem)
