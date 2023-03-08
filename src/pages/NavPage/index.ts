import Block from 'core/Block'
import { withRouter } from '../../utils/withRouter'

import './navPage.scss'

class NavPage extends Block {
  constructor(props) {
    super(props)

    this.setProps({
      onButtonClick: () => this.onButtonClick(),
    })
  }

  onButtonClick() {
    this.props.router.go('/login')
  }

  render() {
    // language=hbs
    return `
      <nav class='main-nav'>
          {{{NavLinkButton
            text='Login'
            route='/login'
          }}}
          {{{NavLinkButton
            text='Register'
            route='/sign-up'
          }}}
          {{{NavLinkButton
            text='Chat'
            route='/messenger'
          }}}
          {{{NavLinkButton
            text='Settings'
            route='/settings'
          }}}
          {{{NavLinkButton
            text='404'
            route='/404'
          }}}
          {{{NavLinkButton
            text='500'
            route='/500'
          }}}
      </nav>
    `
  }
}

export default withRouter(NavPage)
