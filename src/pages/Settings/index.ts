import Block from '../../core/Block'

import './settings.scss'
class SettingsPage extends Block {
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
      <main class="main">
        <div class="settings settings_container">

          {{{BackBar}}}

          <div class="settings_main-wrapper">
            <div class="settings_user-info">
              <div class="settings_userpic-container">
                <!--                <img  alt="">-->
              </div>
              <span class="settings_name">
                    Иван
                </span>
            </div>

            <div class="settings_items-wrapper">
              {{{SettingsItem}}}
              {{{SettingsItem}}}
              {{{SettingsItem}}}
              {{{SettingsItem}}}
              {{{SettingsItem}}}
              {{{SettingsItem}}}
            </div>

            <div class="settings_links-wrapper">
              <div class="settings_link-wrapper">
                {{{LinkButton}}}
              </div>
              <div class="settings_link-wrapper">
                {{{LinkButton}}}
              </div>
              {{{LinkButton}}}
            </div>

          </div>
        </div>
      </main>


    `
  }
}

export default SettingsPage
