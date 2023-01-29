import Block from '../../core/Block'
import template from 'bundle-text:./addFileButton.hbs'

import './addFileButton.scss'

interface AddFileButtonProps {
	text?: string
	onClick?: () => void
}

class AddFileButton extends Block {
	constructor({ text, onClick }: AddFileButtonProps) {
		super({ text, events: { click: onClick } })
	}

	protected render(): string {
		return template
	}
}

export default AddFileButton
