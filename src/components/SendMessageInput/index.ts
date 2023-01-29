import Block from '../../core/Block'
import template from 'bundle-text:./sendMessageInput.hbs'

import './sendMessageInput.scss'

interface SendMessageInputProps {
	text?: string
	onClick?: () => void
}

class  SendMessageInput extends Block {
	constructor({ text, onClick }: SendMessageInputProps) {
		super({ text, events: { click: onClick } })
	}

	protected render(): string {
		return template
	}
}

export default  SendMessageInput
