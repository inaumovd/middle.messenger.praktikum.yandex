import Block from 'core/Block'
import { validateForm, ValidateRuleType } from 'helpers/validateForm'

import './settings.scss'
import { withRouter } from '../../utils/withRouter'
import { HTTPTransport } from '../../core/api'
import { getMeApiCall, onPutUserProfileApiCall } from '../../services/apiCalls'
import { withStore } from '../../utils/withStore'

class SettingsPage extends Block {
  constructor(props) {
    super(props)

    this.setProps({
      onEditClick: () => this.onEditClick(),
      onChangePasswordClick: () => this.onChangePasswordClick(),
      onChangeUserpicClick: () => this.onChangeUserpicClick(),
      onInput: (e: InputEvent) => this.onInput(e),
      onFocus: (e: FocusEvent) => this.onFocus(e),
      onSaveClick: () => this.onSaveClick(),
      isEditMode: false,
    })

    getMeApiCall((payload) => {
      this.setProps({
        user: payload,
      })
    })
  }

  onEditClick() {
    this.setProps({
      isEditMode: true,
    })
  }

  onChangePasswordClick() {
    this.props.router.go('/change-password')
  }

  onChangeUserpicClick() {
    this.props.router.go('/change-userpic')
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
        'input[name="first_name"]',
      ) as HTMLInputElement as HTMLInputElement
    const lastNameEl = this.refs.lastNameInputRef
      .getContent()
      .querySelector(
        'input[name="last_name"]',
      ) as HTMLInputElement as HTMLInputElement
    const displayNameEl = this.refs.displayNameInputRef
      .getContent()
      .querySelector(
        'input[name="display_name"]',
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

    onPutUserProfileApiCall({
      data: {
        first_name: firstNameEl.value,
        second_name: lastNameEl.value,
        display_name: displayNameEl.value,
        login: loginEl.value,
        email: emailEl.value,
        phone: phoneEl.value,
      },
      headers: { 'content-type': 'application/json' },
    })

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

    if (inputEl.name === 'first_name') {
      errorMessage = validateForm([
        { type: ValidateRuleType.Name, value: inputEl.value },
      ])

      this.refs.firstNameInputRef.refs.errorRef.setProps({
        text: errorMessage,
      })
    }

    if (inputEl.name === 'last_name') {
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

    if (inputEl.name === 'first_name') {
      this.refs.firstNameInputRef.refs.errorRef.setProps({
        text: '',
      })
    }

    if (inputEl.name === 'last_name') {
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
                {{#if isEditMode}}
                  <span class="settings_name">
                    Изменить данные пользователя
                  </span>
                {{else}}
                  <span class="settings_name">
                    Данные пользователя
                  </span>
                {{/if}}
            </div>
              {{#if isEditMode}}
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
                              name="first_name"
                              placeholder="Имя"
                              type="firstName"
                              onInput=onInput
                              onFocus=onFocus
                              ref="firstNameInputRef"
                      }}}
                      {{{ControlledInput
                              name="last_name"
                              placeholder="Фамилия"
                              type="lastName"
                              onInput=onInput
                              onFocus=onFocus
                              ref="lastNameInputRef"
                      }}}
                      {{{ControlledInput
                              name="display_name"
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
              {{else}}
                  <div class="settings_items-wrapper">
                      <div class="settings-item">
                          <span>Email</span> <span>{{user.email}}</span>
                      </div>
                      <div class="settings-item">
                          <span>Логин</span> <span>{{user.login}}</span>
                      </div>
                      <div class="settings-item">
                          <span>Имя</span> <span>{{user.first_name}}</span>
                      </div>
                      <div class="settings-item">
                          <span>Фамилия</span> <span>{{user.second_name}}</span>
                      </div>
                      <div class="settings-item">
                          <span>Имя в чате</span> <span>{{user.display_name}}</span>
                      </div>
                      <div class="settings-item">
                          <span>Телефон</span> <span>{{user.phone}}</span>
                      </div>
                  </div>
              {{/if}}


            <div class="settings_links-wrapper">
              <div class="settings_link-wrapper">
                  {{#if isEditMode}}
                    {{{LinkButton
                      text="Сохранить данные"
                      onClick=onSaveClick
                    }}}
                  {{else}}
                    {{{LinkButton
                      text="Изменить данные"
                      onClick=onEditClick
                    }}}
                  {{/if}}

              </div>
              <div class="settings_link-wrapper">
                {{{LinkButton
                  text="Изменить пароль"
                  onClick=onChangePasswordClick
                }}}
              </div>
                <div class="settings_link-wrapper">
                {{{LinkButton
                  text="Изменить аватар"
                  onClick=onChangeUserpicClick
                }}}
                </div>
            </div>
          </div>
        </div>
      </main>
    `
  }
}

export default withStore(withRouter(SettingsPage))
