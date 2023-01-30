import Block from '../../core/Block'
import template from 'bundle-text:./roundedButton.hbs'

import './roundedButton.scss'

interface RoundedButtonProps {
  text?: string
  onClick?: () => void
}

class RoundedButton extends Block {
  static componentName = 'RoundedButton'
  constructor({ text, onClick }: RoundedButtonProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default RoundedButton
