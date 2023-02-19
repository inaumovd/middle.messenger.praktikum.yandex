import Block from 'core/Block'

import './linkButton.scss'

interface LinkButtonProps {
  text?: string
  isRed?: boolean
  onClick?: () => void
}

class LinkButton extends Block<LinkButtonProps> {
  static componentName = 'LinkButton'
  constructor({ text, isRed, onClick }: LinkButtonProps) {
    super({ text, isRed, events: { click: onClick } })
  }

  protected render(): string {
    // language=hbs
    return `<a class='{{#if isRed}}link-button_red{{/if}} link-button'>{{text}}</a>`
  }
}

export default LinkButton
