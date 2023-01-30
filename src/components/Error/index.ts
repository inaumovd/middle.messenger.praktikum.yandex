import Block from 'core/Block'

import './error.scss'

interface ErrorProps {
  text?: string
}

class Error extends Block<ErrorProps> {
  static componentName = 'Error'

  protected render(): string {
    return `
      <div class='input-error'>{{#if text}}{{text}}{{/if}}</div>
	  `
  }
}

export default Error
