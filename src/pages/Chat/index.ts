import Block from 'core/Block'

import './chat.scss'

class ChatPage extends Block {
  constructor() {
    super()

    this.setProps({
      onButtonClick: () => this.onButtonClick(),
    })
  }

  onButtonClick() {
    console.log('123')
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="chat-page">
          {{{ChatSidebar}}}
          {{{ChatMain}}}
        </div>
      </main>
    `
  }
}

export default ChatPage
