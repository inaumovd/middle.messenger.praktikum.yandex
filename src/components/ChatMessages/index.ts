import Block from 'core/Block'

import './chatMessages.scss'
import { withStore } from '../../utils/withStore'

class ChatMessages extends Block {
  static componentName = 'ChatMessages'
  constructor(props) {
    super(props)

    this.setProps({
      messages: this.props.store.getState().messages,
      onSubmit: () => this.onSubmit(),
    })
  }

  onSubmit() {
    console.log(this.props)
  }

  protected render(): string {
    // language=hbs
    return `
    <div class="chat-messages">
    <div>
        <ul class="chat-messages_list">
            {{#each messages}}
                {{{ChatMessage
                  message=this
                }}}
            {{/each}}

        </ul>
    </div>
</div>`
  }
}

export default withStore(ChatMessages)
