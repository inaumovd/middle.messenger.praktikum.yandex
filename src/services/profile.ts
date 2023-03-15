import { HTTPTransport } from '../core/api'
import Router from '../core/Router'

export class ProfileApi extends HTTPTransport {
  private router: Router
  constructor() {
    super()

    this.router = new Router()
  }

  changePassword({
    newPassword,
    oldPassword,
  }: {
    newPassword: string
    oldPassword: string
  }) {
    this.put(`user/password`, {
      data: {
        newPassword,
        oldPassword,
      },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        this.router.go('/settings')
      }
    })
  }

  changeAvatar(avatar: File) {
    this.put(`user/profile/avatar`, {
      data: avatar,
      type: 'file',
      // headers: { 'content-type': 'multipart/form-data' },
    }).then((res) => {
      if (res.status === 200) {
        console.log('Аватар изменен')
      }
    })
  }

  changeProfileInfo({
    email,
    first_name,
    phone,
    second_name,
    display_name,
    login,
  }: {
    email: string
    first_name: string
    phone: string
    second_name: string
    display_name: string
    login: string
  }) {
    this.put(`user/profile`, {
      data: {
        email,
        first_name,
        phone,
        second_name,
        display_name,
        login,
      },
      headers: { 'content-type': 'application/json' },
    }).then((res) => {
      if (res.status === 200) {
        console.log('Данные успешно изменены')
      }
    })
  }
}
