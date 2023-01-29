import Block from '../../core/Block'

import './404.scss'

class Page404 extends Block {
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
          <h1 class="error-page_code-name">404</h1>
          <span class="error-page_code-name-description">Не туда попали</span>
          {{{LinkButton}}}
        </div>
      </main>


    `
  }
}

export default Page404
