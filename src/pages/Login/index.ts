import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './login.scss'

class LoginPage extends Block {
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
      onInput: (e: InputEvent) => this.onInput(e),
      onFocus: (e: FocusEvent) => this.onFocus(e),
      errorMessage: '',
      emailValue: '',
      passwordValue: '',
    })
  }

  onFocus(e: FocusEvent) {
    const inputEl = e.target as HTMLInputElement

    let errorMessage = ''

    if (inputEl.type === 'email') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Email, value: inputEl.value },
      ])

      this.refs.emailInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.type === 'password') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Password, value: inputEl.value },
      ])

      this.refs.passwordInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }
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

    // const error = validateForm([
    //   { type: ValidateRuleType.Email, value: inputEl.value },
    // ])

    // console.log(inputEl.value)

    this.refs.emailInputRef.refs.errorRef.setProps({
      text: '',
    })

    this.refs.passwordInputRef.refs.errorRef.setProps({
      text: '',
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
                {{{ControlledInput
                  name="email"
                  placeholder="Email"
                  type="email"
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

            {{{LinkButton }}}
          </div>
        </div>
      </main>
    `
  }
}

export default LoginPage
