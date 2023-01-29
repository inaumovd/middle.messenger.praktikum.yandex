import Block from '../../core/Block'

import './register.scss'
class RegisterPage extends Block {
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
        <div class="auth-container">
          <div class="auth-form-container">
            <h1 class="auth-header">Регистрация</h1>
            <div class="inputs-container--reg">
              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>

              <div class="input-wrapper">
                {{{Input}}}
              </div>
            </div>

            <div class="auth-button-container">
              {{{Button}}}
            </div>
            
            {{{LinkButton}}}
          </div>
        </div>
      </main>


    `
  }
}

export default RegisterPage
