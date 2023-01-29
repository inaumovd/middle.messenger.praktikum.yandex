import Block from '../../core/Block'
import template from 'bundle-text:./linkButton.hbs'

import './linkButton.scss'

interface LinkButtonProps {
  text?: string
  onClick?: () => void
}

class LinkButton extends Block {
  constructor({ text, onClick }: LinkButtonProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default LinkButton
