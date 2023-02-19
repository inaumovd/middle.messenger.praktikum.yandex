import Block from 'core/Block'

import './500.scss'

class Page500 extends Block {
  constructor() {
    super()

    this.setProps({
      onButtonClick: () => this.onButtonClick(),
    })
  }

  onButtonClick() {
    console.log('123')
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="error-page_container">
          <h1 class="error-page_code-name">500</h1>
          <span class="error-page_code-name-description">Мы уже фиксим</span>
          {{{LinkButton}}}
        </div>
      </main>

    `
  }
}

export default Page500
