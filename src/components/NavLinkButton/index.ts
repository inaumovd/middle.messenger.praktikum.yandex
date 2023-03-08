import Block from 'core/Block'

import './linkButton.scss'
import { withRouter } from '../../utils/withRouter'
import Router from '../../core/Router'

interface NavLinkButtonProps {
  text?: string
  route?: string
  router: Router
}

class NavLinkButton extends Block<NavLinkButtonProps> {
  static componentName = 'NavLinkButton'
  constructor({ text, route, router }: NavLinkButtonProps) {
    super({ text, route, router })

    this.setProps({
      onButtonClick: () => this.onButtonClick(),
    })
  }

  onButtonClick() {
    this.props.router.go(this.props.route)
  }

  protected render(): string {
    // language=hbs
    return `
      {{{LinkButton
          text=text
          onClick=onButtonClick
      }}}`
  }
}

export default withRouter(NavLinkButton)
