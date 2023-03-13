import { HTTPTransport } from '../core/api'

const api = new HTTPTransport()

export const getChatsApiCall = (callback?: (payload: any) => void) => {
  api.get('chats').then((res) => {
    if (res.status === 200) {
      const parsedRes = JSON.parse(res.response)
      callback && callback(parsedRes)
    }
  })
}

export const getMeApiCall = (callback?: (payload: any) => void) => {
  api.get('auth/user').then((res) => {
    if (res.status === 200) {
      const parsedRes = JSON.parse(res.response)
      callback && callback(parsedRes)
    }
  })
}

export const postChatTokenApiCall = (
  chatId: number,
  callback?: (payload: any) => void,
) => {
  api.post(`chats/token/${chatId}`).then((res) => {
    if (res.status === 200) {
      const parsedRes = JSON.parse(res.response)
      callback && callback(parsedRes)
    }
  })
}

export const onLogoutApiCall = (callback?: () => void) => {
  api.post(`auth/logout`).then((res) => {
    if (res.status === 200) {
      callback && callback()
    }
  })
}

export const onPostChatApiCall = (data: any, callback?: () => void) => {
  api.post(`chats`, data).then((res) => {
    if (res.status === 200) {
      callback && callback()
    }
  })
}

export const onAddUserApiCall = (data: any) => {
  api.put(`chats/users`, data).then((res) => {
    if (res.status === 200) {
      console.log('Пользователь добавлен')
    }
  })
}

export const onDeleteUserApiCall = (data: any) => {
  api.delete(`chats/users`, data).then((res) => {
    if (res.status === 200) {
      console.log('Пользователь удален')
    }
  })
}

export const onChangePasswordApiCall = (data: any) => {
  api.put(`user/password`, data).then((res) => {
    if (res.status === 200) {
      console.log('Пароль изменен')
    }
  })
}

export const onChangeAvatarApiCall = (data: any) => {
  api.put(`profile/avatar`, data).then((res) => {
    if (res.status === 200) {
      console.log('Аватар изменен')
    }
  })
}

export const onSignInApiCall = (data: any, callback: () => void) => {
  api.post(`auth/signin`, data).then((res) => {
    if (res.status === 200) {
      callback && callback()
    }
  })
}

export const onSignUpApiCall = (data: any, callback: () => void) => {
  api.post(`auth/signup`, data).then((res) => {
    if (res.status === 200) {
      callback && callback()
    }
  })
}

export const onPutUserProfileApiCall = (data: any) => {
  api.put(`user/profile`, data).then((res) => {
    if (res.status === 200) {
      console.log('Данные успешно изменены')
    }
  })
}
