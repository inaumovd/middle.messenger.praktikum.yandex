import Block from '../../core/Block'

import './button.scss'

interface ButtonProps {
  text?: string
  onClick?: () => void
}

class Button extends Block<ButtonProps> {
  static componentName = 'Button'
  constructor({ text, onClick }: ButtonProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    // language=hbs
    return `
			<button class="button" type="submit">{{text}}</button>
		`
  }
}

export default Button
