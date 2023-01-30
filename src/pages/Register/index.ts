import Block from '../../core/Block'

import './register.scss'
class RegisterPage extends Block {
  constructor() {
    super()

    this.setProps({
      onSubmit: () => this.onSubmit(),
    })
  }

  onSubmit() {
    const emailEl = this.refs.emailInputRef
      .getContent()
      .querySelector('input[name="email"]') as HTMLInputElement

    const loginlEl = this.refs.loginInputRef
      .getContent()
      .querySelector('input[name="login"]') as HTMLInputElement

    const firstNameEl = this.refs.firstNameInputRef
      .getContent()
      .querySelector('input[name="firstName"]') as HTMLInputElement

    const lastNameEl = this.refs.lastNameInputRef
      .getContent()
      .querySelector('input[name="lastName"]') as HTMLInputElement

    const phoneEl = this.refs.phoneInputRef
      .getContent()
      .querySelector('input[name="phone"]') as HTMLInputElement

    const passwordEl = this.refs.passwordInputRef
      .getContent()
      .querySelector('input[name="password"]') as HTMLInputElement

    const passwordConfirmEl = this.refs.passwordConfirmInputRef
      .getContent()
      .querySelector('input[name="passwordConfirm"]') as HTMLInputElement

    if (passwordConfirmEl.value !== passwordEl.value) {
      this.refs.passwordConfirmInputRef.refs.errorRef.setProps({
        text: 'Пароли не совпадают',
      })
    }

    console.log(
      'request to api ->',
      emailEl.value,
      loginlEl.value,
      firstNameEl.value,
      lastNameEl.value,
      phoneEl.value,
      passwordEl.value,
      passwordConfirmEl.value,
    )
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
                  {{{ControlledInput
                    name="email"
                    placeholder="Почта"
                    type="email"
                    onInput=onInput
                    onFocus=onFocus
                    ref="emailInputRef"
                  }}}
              </div>

              <div class="input-wrapper">
                  {{{ControlledInput
                    name="login"
                    placeholder="Логин"
                    type="login"
                    onInput=onInput
                    onFocus=onFocus
                    ref="loginInputRef"
                  }}}
              </div>

              <div class="input-wrapper">
                  {{{ControlledInput
                    name="firstName"
                    placeholder="Имя"
                    type="firstName"
                    onInput=onInput
                    onFocus=onFocus
                    ref="firstNameInputRef"
                  }}}
              </div>

              <div class="input-wrapper">
                  {{{ControlledInput
                    name="lastName"
                    placeholder="Фамилия"
                    type="lastName"
                    onInput=onInput
                    onFocus=onFocus
                    ref="lastNameInputRef"
                  }}}
              </div>

              <div class="input-wrapper">
                  {{{ControlledInput
                    name="phone"
                    placeholder="Телефон"
                    type="phone"
                    onInput=onInput
                    onFocus=onFocus
                    ref="phoneInputRef"
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

              <div class="input-wrapper">
                  {{{ControlledInput
                    name="passwordConfirm"
                    placeholder="Пароль (еще раз)"
                    type="password"
                    onInput=onInput
                    onFocus=onFocus
                    ref="passwordConfirmInputRef"
                  }}}
              </div>
            </div>

            <div class="auth-button-container">
              {{{Button
                onClick=onSubmit
                text="Зарегистрироваться"
              }}}
            </div>
            
            {{{LinkButton
              text="Войти"
            }}}
          </div>
        </div>
      </main>
    `
  }
}

export default RegisterPage
