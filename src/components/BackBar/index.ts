import Block from '../../core/Block'

import './backBar.scss'

interface BackBarProps {
  text?: string
  onClick?: () => void
}

class BackBar extends Block {
  static componentName = 'BackBar'
  constructor({ text, onClick }: BackBarProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return `
			<div class="back-bar">
	      {{{RoundedButton}}}
			</div>
		`
  }
}

export default BackBar
