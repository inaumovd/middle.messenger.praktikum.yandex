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

  onSubmit() {
    const myUserForm = document.getElementById('myUserForm')
    const avatar = document.getElementById('avatar')
    const form = new FormData(myUserForm)

    const api = new HTTPTransport()
    const host = 'https://ya-praktikum.tech/api/v2/user/profile/avatar'
    api
      .put(host, {
        data: form,
        type: 'file',
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('Аватар изменен')
        }
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
              <form id="myUserForm">
                  Выбрать аватар: <input id="avatar" type="file" name="avatar" accept="image/*">
                  {{{Button
                    onClick=onSubmit
                    text="Сохранить"
                  }}}
              </form>
          </div>
        </div>
      </main>
    `
  }
}

export default withRouter(ChangeUserpic)
