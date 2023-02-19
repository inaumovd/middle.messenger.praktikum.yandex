import Block from 'core/Block'
import template from 'bundle-text:./searchInput.hbs'

import './searchInput.scss'

class SearchInput extends Block {
  static componentName = 'SearchInput'
  constructor() {
    super()
  }

  protected render(): string {
    return template
  }
}

export default SearchInput
