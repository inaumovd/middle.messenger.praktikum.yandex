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
  constructor({ ...props }: ControlledInputProps) {
    super({
      ...props,
      onBlur: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement

        const error = validateForm([
          { type: ValidateRuleType.Email, value: inputEl.value },
        ])

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
