import Block from 'core/Block'

import './navPage.scss'

class NavPage extends Block {
  constructor() {
    super()

    this.setProps({
      onButtonClick: () => this.onButtonClick(),
    })
  }

  onButtonClick() {
    console.log('123')
  }

  render() {
    // language=hbs
    return `
      <nav class='main-nav'>
        <a href="./login">Login</a>
        <a href="./register">Register</a>
        <a href="./chat">Chat</a>
        <a href="./settings">Settings</a>
        <a href="./404">404</a>
        <a href="./500">500</a>
      </nav>
    `
  }
}

export default NavPage
