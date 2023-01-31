import Block from 'core/Block'

import './chatSidebar.scss'

class ChatSidebar extends Block {
  static componentName = 'ChatSidebar'
  constructor() {
    super()
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
