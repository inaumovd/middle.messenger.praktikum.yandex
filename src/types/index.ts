export interface Chat {
  avatar: null | string
  created_by: number
  id: number
  last_message: string
  title: string
  unread_count: number
}

export interface Message {
  user_id: number
  content: string
  time: string
}

export interface User {
  avatar: null | string
  display_name: string
  email: string
  first_name: string
  id: number
  login: string
  phone: string
  second_name: string
}
