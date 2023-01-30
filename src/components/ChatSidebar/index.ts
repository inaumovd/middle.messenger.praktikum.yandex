import Block from '../../core/Block'

import './chatSidebar.scss'

interface ChatSidebarProps {
  text?: string
  onClick?: () => void
}

class ChatSidebar extends Block {
  static componentName = 'ChatSidebar'
  constructor({ text, onClick }: ChatSidebarProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return `
		  <div class="chat-sidebar">
        <div class="chat-sidebar_header">
          <div class="profile-button-wrapper">
              <a class="profile-button">Профиль ></a>
          </div>

          <div>
              {{{SearchInput}}}
          </div>
        </div>

        <ul class="chat-list">
            {{{ChatItem}}}
        </ul>
      </div>
		`
  }
}

export default ChatSidebar
