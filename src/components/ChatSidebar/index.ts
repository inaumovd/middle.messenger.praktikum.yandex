import Block from 'core/Block'

import './chatSidebar.scss'
import { withRouter } from '../../utils/withRouter'
import { HTTPTransport } from '../../core/api'

class ChatSidebar extends Block {
  static componentName = 'ChatSidebar'
  constructor(props) {
    super(props)

    this.setProps({
      onExitClick: () => this.onExitClick(),
    })
  }

  onExitClick() {
    console.log('EXIT')
    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/auth/logout'
    api.post(host).then((res) => {
      console.log(res)
      if (res.status === 200) {
        this.props.router.go('/')
      }
    })
  }

  protected render(): string {
    // language=hbs
    return `
		  <div class="chat-sidebar">
        <div class="chat-sidebar_header">
          <div class="profile-button-wrapper">
          {{{LinkButton
            onClick=onExitClick
            text='Выход'
          }}}
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

export default withRouter(ChatSidebar)
