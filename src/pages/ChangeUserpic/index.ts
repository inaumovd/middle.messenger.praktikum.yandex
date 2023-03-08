import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './login.scss'
import { HTTPTransport } from '../../core/api'
import { withRouter } from '../../utils/withRouter'

class ChangeUserpic extends Block {
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

  onSubmit(event) {
    console.log('TUT', event)
    // .getContent()
    // .querySelector('input[name="oldPassword"]') as HTMLInputElement

    // const api = new HTTPTransport()
    // const host = 'https://ya-praktikum.tech/api/v2/user/password'
    // api
    //   .put(host, {
    //     data: {
    //       oldPassword: oldPasswordEl.value,
    //       newPassword: newPasswordEl.value,
    //     },
    //     headers: { 'content-type': 'application/json' },
    //   })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       console.log('Пароль изменен')
    //     }
    //   })
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
              <form id="myUserForm">
                  Картинка: <input id="avatar" type="file" name="avatar" accept="image/*">
<!--                  <input type="submit">-->
                  {{{Button
                          onClick=onSubmit
                          text="Зарегистрироваться"
                  }}}
              </form>
          </div>
        </div>
      </main>
    `
  }
}

export default withRouter(ChangeUserpic)
