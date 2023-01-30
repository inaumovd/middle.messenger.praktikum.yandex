import Block from 'core/Block'

import './input.scss'

interface InputProps {
  onInput?: () => void
  onBlur?: () => void
  onFocus?: () => void
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  name?: string
}

class Input extends Block {
  static componentName = 'Input'
  constructor({
    onInput,
    onBlur,
    onFocus,
    type,
    placeholder,
    name,
  }: InputProps) {
    super({
      events: { input: onInput, blur: onBlur, focus: onFocus },
      type,
      placeholder,
      name,
    })
  }

  protected render(): string {
    return `
      <input class="input" name="{{name}}" type="{{type}}" placeholder="{{placeholder}}">
	`
  }
}

export default Input
