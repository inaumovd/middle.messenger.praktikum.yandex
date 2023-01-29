import Block from '../../core/Block'

import './input.scss'

interface InputProps {
  onChange?: () => void
  onBlur?: () => void
  onFocus?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  value?: string
  error?: string
  label?: string
  name?: string
}

class Input extends Block {
  constructor({
    label,
    onChange,
    onBlur,
    onFocus,
    type = 'text',
    placeholder,
    value,
    error,
    name,
  }: InputProps) {
    super({
      label,
      events: { input: onChange, blur: onBlur, focus: onFocus },
      type,
      placeholder,
      value,
      error,
      name,
    })
  }

  protected render(): string {
    return `
     <div class="input-container">
       <input name="{{name}}" type="{{type}}" value="{{value}}" placeholder="{{placeholder}}">
       <div>{{#if error}}{{error}}{{/if}}</div>
     </div>
	`
  }
}

export default Input
