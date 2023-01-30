import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './login.scss'

class LoginPage extends Block {
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
      onInput: (e: HTMLInputElement) => this.onInput(e),
      onBlur: () => this.onBlur(),
      onFocus: () => this.onFocus(),
      errorMessage: '',
      emailValue: '',
      passwordValue: '',
    })
  }

  onFocus() {
    console.log('focus')
  }

  onSubmit() {
    const emailEl = this.refs.emailInputRef
      .getContent()
      .querySelector('input[name="email"]') as HTMLInputElement

    const passwordEl = this.refs.passwordInputRef
      .getContent()
      .querySelector('input[name="password"]') as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Email, value: emailEl.value },
      { type: ValidateRuleType.Password, value: passwordEl.value },
    ])

    if (!errorMessage) {
      console.log('send request', emailEl.value, passwordEl.value)
    }
  }

  onInput(e: InputEvent) {
    const inputEl = e.target as HTMLInputElement

    const error = validateForm([
      { type: ValidateRuleType.Email, value: inputEl.value },
    ])

    this.refs.emailInputRef.refs.errorRef.setProps({
      text: error,
    })
  }

  onBlur() {
    console.log('blus')
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
                {{{ControlledInput
                  name="email"
                  placeholder="Email"
                  type="text"
                  onInput=onInput
                  onFocus=onFocus
                  ref="emailInputRef"
                }}}
              </div>

              <div class="input-wrapper">
                {{{ControlledInput
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  onInput=onInput
                  onFocus=onFocus
                  ref="passwordInputRef"
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
