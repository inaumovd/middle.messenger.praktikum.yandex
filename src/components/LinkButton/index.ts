import Block from 'core/Block'

import './linkButton.scss'

interface LinkButtonProps {
  text?: string
  onClick?: () => void
}

class LinkButton extends Block {
  static componentName = 'LinkButton'
  constructor({ text, onClick }: LinkButtonProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    // language=hbs
    return `<a class="link-button">{{text}}</a>`
  }
}

export default LinkButton
