import Block from 'core/Block'
import template from 'bundle-text:./addFileButton.hbs'

import './addFileButton.scss'

interface AddFileButtonProps {
  onClick?: () => void
}

class AddFileButton extends Block<AddFileButtonProps> {
  static componentName = 'AddFileButton'
  constructor({ onClick }: AddFileButtonProps) {
    super({ events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default AddFileButton
