import Block from '../../core/Block'

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
        <ul>
            <li>
                <a href="./login">Login</a>
            </li>
            <li>
                <a href="./register">Register</a>
            </li>
            <li>
                <a href="./chat">Chat</a>
            </li>
            <li>
                <a href="./settings">Settings</a>
            </li>
            <li>
                <a href="./404">404</a>
            </li>
            <li>
                <a href="./500">500</a>
            </li>
        </ul>
    `
  }
}

export default NavPage
