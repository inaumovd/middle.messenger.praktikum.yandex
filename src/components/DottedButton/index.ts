import Block from '../../core/Block'
import template from 'bundle-text:./dottedButton.hbs'

import './dottedButton.scss'

interface DottedButtonProps {
  text?: string
  onClick?: () => void
}

class DottedButton extends Block {
  constructor({ text, onClick }: DottedButtonProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default DottedButton
