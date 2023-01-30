import Block from 'core/Block'

import './controlledInput.scss'
import { validateForm, ValidateRuleType } from '../../helpers/validateForm'

interface ControlledInputProps {
  onInput?: () => void
  onFocus?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  error?: string
  label?: string
  name?: string
}

class ControlledInput extends Block {
  static componentName = 'ControlledInput'
  constructor({ type, name, ...props }: ControlledInputProps) {
    super({
      ...props,
      name,
      type,
      onBlur: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        let error = ''

        if (name === 'email') {
          error = validateForm([
            { type: ValidateRuleType.Email, value: inputEl.value },
          ])
        }

        if (name === 'password') {
          error = validateForm([
            { type: ValidateRuleType.Password, value: inputEl.value },
          ])
        }

        if (name === 'passwordConfirm') {
          error = validateForm([
            { type: ValidateRuleType.Password, value: inputEl.value },
          ])
        }

        if (name === 'firstName' || name === 'lastName') {
          error = validateForm([
            { type: ValidateRuleType.Name, value: inputEl.value },
          ])
        }

        if (name === 'phone') {
          error = validateForm([
            { type: ValidateRuleType.Phone, value: inputEl.value },
          ])
        }

        if (name === 'login') {
          error = validateForm([
            { type: ValidateRuleType.Login, value: inputEl.value },
          ])
        }

        this.refs.errorRef.setProps({
          text: error,
        })
      },
    })
  }

  protected render(): string {
    return `
     <div class="input-container">
      {{{Input
        name="{{name}}"
        type="{{type}}"
        placeholder="{{placeholder}}"
        onFocus=onFocus
        onInput=onInput
        onBlur=onBlur
      }}}
      {{{Error
        ref="errorRef"
        text=error
      }}}
     </div>
	`
  }
}

export default ControlledInput
