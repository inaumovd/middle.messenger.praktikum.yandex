import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './login.scss'
import { HTTPTransport } from '../../core/api'
import { withRouter } from '../../utils/withRouter'
import { onChangePasswordApiCall } from '../../services/apiCalls'

class ChangePasswordPage extends Block {
  constructor(props) {
    super(props)

    this.setProps({
      onSubmit: () => this.onSubmit(),
      onInput: (e: InputEvent) => this.onInput(e),
      onFocus: (e: FocusEvent) => this.onFocus(e),
      errorMessage: '',
      oldPasswordValue: '',
      newPasswordValue: '',
    })
  }

  onFocus(e: FocusEvent) {
    const inputEl = e.target as HTMLInputElement

    let errorMessage = ''

    if (inputEl.type === 'password') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Password, value: inputEl.value },
      ])

      this.refs.oldPasswordInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })

      this.refs.newPasswordInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }
  }

  onSubmit() {
    const oldPasswordEl = this.refs.oldPasswordInputRef
      .getContent()
      .querySelector('input[name="oldPassword"]') as HTMLInputElement

    const newPasswordEl = this.refs.newPasswordInputRef
      .getContent()
      .querySelector('input[name="newPassword"]') as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Password, value: oldPasswordEl.value },
      { type: ValidateRuleType.Password, value: newPasswordEl.value },
    ])

    onChangePasswordApiCall({
      data: {
        oldPassword: oldPasswordEl.value,
        newPassword: newPasswordEl.value,
      },
      headers: { 'content-type': 'application/json' },
    })
  }

  onInput(e: InputEvent) {
    const inputEl = e.target as HTMLInputElement

    this.refs.oldPasswordInputRef.refs.errorRef.setProps({
      text: '',
    })

    this.refs.newPasswordInputRef.refs.errorRef.setProps({
      text: '',
    })
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="auth-container">
          <div class="auth-form-container">
            <h1 class="auth-header">Изменить пароль</h1>
            <div class="inputs-container">
              <div class="input-wrapper">
                {{{ControlledInput
                  name="oldPassword"
                  placeholder="Старый пароль"
                  type="password"
                  onInput=onInput
                  onFocus=onFocus
                  ref="oldPasswordInputRef"
                }}}
              </div>

              <div class="input-wrapper">
                {{{ControlledInput
                  name="newPassword"
                  placeholder="Новый пароль"
                  type="password"
                  onInput=onInput
                  onFocus=onFocus
                  ref="newPasswordInputRef"
                }}}
              </div>
            </div>
              
              {{errorMessage}}

            <div class="auth-button-container">
              {{{Button onClick=onSubmit text="Сохранить"}}}
            </div>

            {{{LinkButton }}}
          </div>
        </div>
      </main>
    `
  }
}

export default withRouter(ChangePasswordPage)
