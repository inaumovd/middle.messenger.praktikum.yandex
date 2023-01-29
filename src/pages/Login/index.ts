import Block from '../../core/Block'

import './login.scss'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'

class LoginPage extends Block {
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
      onChange: () => this.onChange(),
      onBlur: () => this.onBlur(),
      errorMessage: '',
      emailValue: '',
      passwordValue: '',
    })
  }

  onSubmit() {
    const emailEl = this._element?.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement
    const passwordEl = this._element?.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Email, value: emailEl.value },
      { type: ValidateRuleType.Password, value: passwordEl.value },
    ])

    this.setProps({
      errorMessage,
      emailValue: emailEl.value,
      passwordValue: passwordEl.value,
    })

    if (!errorMessage) {
      console.log('send request')
    }
  }

  onChange() {
    const emailEl = this._element?.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement
    const passwordEl = this._element?.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement

    this.setProps({
      errorMessage: '',
      emailValue: emailEl.value,
      passwordValue: passwordEl.value,
    })
  }

  onBlur() {
    const emailEl = this._element?.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement
    const passwordEl = this._element?.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Email, value: emailEl.value },
      { type: ValidateRuleType.Password, value: passwordEl.value },
    ])

    this.setProps({
      errorMessage,
      emailValue: emailEl.value,
      passwordValue: passwordEl.value,
    })
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="auth-container">
          <div class="auth-form-container">
            <h1 class="auth-header">Вход</h1>
            <div class="inputs-container">
              <div class="input-wrapper">
                {{{Input
                  name="email"
                  label="Email"
                  placeholder="Email"
                  type="text"
                  onChange=onChange
                  onBlur=onBlur
                  value="${this.props.emailValue}"
                }}}
              </div>

              <div class="input-wrapper">
                {{{Input
                  name="password"
                  label="Пароль"
                  placeholder="Пароль"
                  type="password"
                  onChange=onChange
                  onBlur=onBlur
                  value="${this.props.passwordValue}"
                }}}
              </div>
            </div>
              
              {{errorMessage}}

            <div class="auth-button-container">
              {{{Button onClick=onSubmit text="Авторизоваться"}}}
            </div>

            {{{LinkButton}}}
          </div>
        </div>
      </main>
    `
  }
}

export default LoginPage
