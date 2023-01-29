import Block from '../../core/Block'
import template from 'bundle-text:./searchInput.hbs'

import './searchInput.scss'

interface SearchInputProps {
	text?: string
	onClick?: () => void
}

class SearchInput extends Block {
	constructor({ text, onClick }: SearchInputProps) {
		super({ text, events: { click: onClick } })
	}

	protected render(): string {
		return template
	}
}

export default SearchInput
