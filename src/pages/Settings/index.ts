import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './settings.scss'

class SettingsPage extends Block {
  constructor() {
    super()

    this.setProps({
      onEditClick: () => this.onEditClick(),
      onInput: (e: InputEvent) => this.onInput(e),
      onFocus: (e: FocusEvent) => this.onFocus(e),
      onSaveClick: () => this.onSaveClick(),
      isEditMode: true,
    })
  }

  onEditClick() {
    this.setProps({
      isEditMode: true,
    })
  }

  onSaveClick() {
    const emailEl = this.refs.emailInputRef
      .getContent()
      .querySelector(
        'input[name="email"]',
      ) as HTMLInputElement as HTMLInputElement
    const loginEl = this.refs.loginInputRef
      .getContent()
      .querySelector(
        'input[name="login"]',
      ) as HTMLInputElement as HTMLInputElement
    const firstNameEl = this.refs.firstNameInputRef
      .getContent()
      .querySelector(
        'input[name="firstName"]',
      ) as HTMLInputElement as HTMLInputElement
    const lastNameEl = this.refs.lastNameInputRef
      .getContent()
      .querySelector(
        'input[name="lastName"]',
      ) as HTMLInputElement as HTMLInputElement
    const displayNameEl = this.refs.displayNameInputRef
      .getContent()
      .querySelector(
        'input[name="displayName"]',
      ) as HTMLInputElement as HTMLInputElement
    const phoneEl = this.refs.phoneInputRef
      .getContent()
      .querySelector(
        'input[name="phone"]',
      ) as HTMLInputElement as HTMLInputElement

    const errorMessage = validateForm([
      { type: ValidateRuleType.Email, value: emailEl.value },
      { type: ValidateRuleType.Login, value: loginEl.value },
      { type: ValidateRuleType.Name, value: firstNameEl.value },
      { type: ValidateRuleType.Name, value: lastNameEl.value },
      { type: ValidateRuleType.Phone, value: phoneEl.value },
    ])

    if (!errorMessage) {
      console.log(
        'request to api ->',
        emailEl.value,
        loginEl.value,
        firstNameEl.value,
        lastNameEl.value,
        displayNameEl.value,
        phoneEl.value,
      )
    }

    this.setProps({
      isEditMode: false,
    })
  }

  onFocus(e: FocusEvent) {
    const inputEl = e.target as HTMLInputElement

    let errorMessage = ''

    if (inputEl.name === 'email') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Email, value: inputEl.value },
      ])

      this.refs.emailInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.name === 'login') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Login, value: inputEl.value },
      ])

      this.refs.loginInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.name === 'firstName') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Name, value: inputEl.value },
      ])

      this.refs.firstNameInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.name === 'lastName') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Name, value: inputEl.value },
      ])

      this.refs.lastNameInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.name === 'phone') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Phone, value: inputEl.value },
      ])

      this.refs.phoneInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }
  }

  onInput(e: InputEvent) {
    const inputEl = e.target as HTMLInputElement

    // const error = validateForm([
    //   { type: ValidateRuleType.Email, value: inputEl.value },
    // ])

    if (inputEl.name === 'email') {
      this.refs.emailInputRef.refs.errorRef.setProps({
        text: '',
      })
    }

    if (inputEl.name === 'login') {
      this.refs.loginInputRef.refs.errorRef.setProps({
        text: '',
      })
    }

    if (inputEl.name === 'firstName') {
      this.refs.firstNameInputRef.refs.errorRef.setProps({
        text: '',
      })
    }

    if (inputEl.name === 'lastName') {
      this.refs.lastNameInputRef.refs.errorRef.setProps({
        text: '',
      })
    }

    if (inputEl.name === 'phone') {
      this.refs.phoneInputRef.refs.errorRef.setProps({
        text: '',
      })
    }
  }

  render() {
    // language=hbs
    return `
      <main class="main">
        <div class="settings settings_container">

          {{{BackBar}}}

          <div class="settings_main-wrapper">
            <div class="settings_user-info">
              <div class="settings_userpic-container">
                <!--                <img  alt="">-->
              </div>
              <span class="settings_name">
                    Иван
                </span>
            </div>

            <div class="settings_items-wrapper">
                {{{ControlledInput
                  name="email"
                  placeholder="Email"
                  type="email"
                  onInput=onInput
                  onFocus=onFocus
                  ref="emailInputRef"
                }}}
                {{{ControlledInput
                  name="login"
                  placeholder="Логин"
                  type="login"
                  onInput=onInput
                  onFocus=onFocus
                  ref="loginInputRef"
                }}}
                {{{ControlledInput
                  name="firstName"
                  placeholder="Имя"
                  type="firstName"
                  onInput=onInput
                  onFocus=onFocus
                  ref="firstNameInputRef"
                }}}
                {{{ControlledInput
                  name="lastName"
                  placeholder="Фамилия"
                  type="lastName"
                  onInput=onInput
                  onFocus=onFocus
                  ref="lastNameInputRef"
                }}}
                {{{ControlledInput
                  name="displayName"
                  placeholder="Имя в чате"
                  type="displayName"
                  onInput=onInput
                  onFocus=onFocus
                  ref="displayNameInputRef"
                }}}
                {{{ControlledInput
                  name="phone"
                  placeholder="Телефон"
                  type="phone"
                  onInput=onInput
                  onFocus=onFocus
                  ref="phoneInputRef"
                }}}
            </div>

            <div class="settings_links-wrapper">
              <div class="settings_link-wrapper">
                {{{LinkButton
                  text="Сохранить данные"
                  onClick=onSaveClick
                }}}
              </div>
              <div class="settings_link-wrapper">
                {{{LinkButton
                  text="Изменить пароль"
                }}}
              </div>
              {{{LinkButton
                text="Войти"
                isRed=true
              }}}
            </div>

          </div>
        </div>
      </main>
    `
  }
}

export default SettingsPage
