export enum ValidateRuleType {
  Email = 'email',
  Password = 'password',
  Name = 'name',
  Phone = 'phone',
  Login = 'login',
}

type ValidateRule = {
  value: string
  type: ValidateRuleType
}

export function validateForm(rules: ValidateRule[]): string {
  let errorMessage = ''

  rules.forEach((rule) => {
    const { type, value } = rule

    if (type === ValidateRuleType.Email) {
      //Empty role
      if (value.length === 0) {
        errorMessage = 'Поле Email не может быть пустым'
        return
      }

      //Latin char, @, numbers rule
      const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
        value.toLowerCase(),
      )

      if (!isValid) {
        errorMessage = 'Неверный формат поля Email'
        return
      }
    }

    if (type === ValidateRuleType.Password) {
      const MIN_PASS_LENGTH = 8
      const MAX_PASS_LENGTH = 40

      // Длина пароля
      if (value.length < MIN_PASS_LENGTH || value.length > MAX_PASS_LENGTH) {
        errorMessage = `Допустимая длинна пароля от ${MIN_PASS_LENGTH} до ${MAX_PASS_LENGTH} символов`
        return
      }

      if (value.length === 0) {
        errorMessage = 'Поле Пароль не может быть пустым'
        return
      }

      // Одна заглавная
      const isUpperChar = /^(?=.*[A-ZА-Я])([\w\d\s\p{L}]+)$/.test(value)
      if (!isUpperChar) {
        errorMessage = 'Пароль должен содержать хотя бы одну заглавную букву'
        return
      }
    }

    if (type === ValidateRuleType.Login) {
      const MIN_LOGIN_LENGTH = 3
      const MAX_LOGIN_LENGTH = 20

      // Длина логина
      if (value.length < MIN_LOGIN_LENGTH || value.length > MAX_LOGIN_LENGTH) {
        errorMessage = `Допустимая длинна логина от ${MIN_LOGIN_LENGTH} до ${MAX_LOGIN_LENGTH} символов`
        return
      }

      if (value.length === 0) {
        errorMessage = 'Поле Логин не может быть пустым'
        return
      }

      // Общие требования
      const isValid = /^(?=\w)[\w-]{3,20}$/.test(value)
      if (!isValid) {
        errorMessage = 'Логин не соответствует требованиям'
        return
      }
    }

    if (type === ValidateRuleType.Phone) {
      // Общие требования
      const isValid = /^[0-9\-\+]{10,15}$/.test(value)
      if (!isValid) {
        errorMessage = 'Телефон не соответствует требованиям'
        return
      }

      if (value.length === 0) {
        errorMessage = 'Поле Телефон не может быть пустым'
        return
      }
    }

    if (type === ValidateRuleType.Name) {
      // Общие требования
      const isValid = /^[A-ZА-Я][\p{L}-]+$/.test(value)
      if (!isValid) {
        errorMessage = 'Телефон не соответствует требованиям'
        return
      }

      if (value.length === 0) {
        errorMessage = 'Поле не может быть пустым'
        return
      }
    }
  })

  return errorMessage
}
