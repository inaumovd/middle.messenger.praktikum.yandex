import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './login.scss'
import { withRouter } from '../../utils/withRouter'
import { AuthApi } from '../../services/auth'

class LoginPage extends Block {
  private authApi: AuthApi
  constructor(props) {
    super(props)

    this.setProps({
      onSubmit: () => this.onSubmit(),
      onInput: (e: InputEvent) => this.onInput(e),
      onFocus: (e: FocusEvent) => this.onFocus(e),
      errorMessage: '',
      emailValue: '',
      passwordValue: '',
    })

    this.authApi = new AuthApi()
  }

  onFocus(e: FocusEvent) {
    const inputEl = e.target as HTMLInputElement

    let errorMessage = ''

    if (inputEl.type === 'login') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Login, value: inputEl.value },
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
      .querySelector('input[name="login"]') as HTMLInputElement

    const passwordEl = this.refs.passwordInputRef
      .getContent()
      .querySelector('input[name="password"]') as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Login, value: emailEl.value },
      { type: ValidateRuleType.Password, value: passwordEl.value },
    ])

    this.authApi.signIn({ password: passwordEl.value, login: emailEl.value })
  }

  onInput(e: InputEvent) {
    const inputEl = e.target as HTMLInputElement

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
                  name="login"
                  placeholder="Login"
                  type="login"
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

export default withRouter(LoginPage)
