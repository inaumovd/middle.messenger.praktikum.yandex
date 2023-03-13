import Block from 'core/Block'

import './backBar.scss'
import { withRouter } from '../../utils/withRouter'

interface BackBarProps {
  text?: string
  onClick?: () => void
}

class BackBar extends Block<BackBarProps> {
  static componentName = 'BackBar'
  constructor({ text, onClick, router }: BackBarProps) {
    super({ router, text, events: { click: onClick } })

    this.setProps({
      onBackClick: () => this.onBackClick(),
    })
  }

  onBackClick() {
    this.props.router.go('/messenger')
  }

  protected render(): string {
    return `
			<div class="back-bar">
	      {{{RoundedButton
	        onClick=onBackClick
	      }}}
			</div>
		`
  }
}

export default withRouter(BackBar)
