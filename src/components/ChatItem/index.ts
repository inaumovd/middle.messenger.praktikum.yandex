import Block from 'core/Block'

import './chatItem.scss'
import SocketChat from '../../core/ws'
import { HTTPTransport } from '../../core/api'
import { Store } from '../../core/store'
import Router from '../../core/Router'

interface ChatItemProps {
  store: Store<any>
  router: Router
  events: any
  chat: any
}

class ChatItem extends Block<ChatItemProps> {
  static componentName = 'ChatItem'
  private chat: SocketChat | undefined
  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: () => {
          const api = new HTTPTransport()
          const host3 = `https://ya-praktikum.tech/api/v2/chats/token/${props.chat.id}`
          api.post(host3).then((response) => {
            const parsedRes = JSON.parse(response.response)
            this.chat = new SocketChat()
            const onOpenChat = () => {
              this?.chat?.getOldMessages(0)
            }
            this.chat.start(parsedRes.token, 612587, props.chat.id, onOpenChat)
          })
        },
      },
    })
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
<!--            <span>Изображение</span>-->
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
        <div class="chat-list-item_time-wrapper">
            <span class="chat-list-item_time">{{chat.last_message.time}}</span>
<!--            <span class="chat-list-item-counter">{{chat.last_message.unread_count}}</span>-->
        </div>
    </div>
</li>

    `
  }
}

export default ChatItem
