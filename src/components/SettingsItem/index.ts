import Block from '../../core/Block'
import template from 'bundle-text:./settingsItem.hbs'

import './settingsItem.scss'

interface SettingsItemProps {
  text?: string
  onClick?: () => void
}

class SettingsItem extends Block {
  static componentName = 'SettingsItem'
  constructor({ text, onClick }: SettingsItemProps) {
    super({ text, events: { click: onClick } })
  }

  protected render(): string {
    return template
  }
}

export default SettingsItem
