export enum ValidateRuleType {
  Email = 'email',
  Password = 'password'
}

type ValidateRule = {
  value: string
  type: ValidateRuleType
}

export function validateForm(rules: ValidateRule[]): string {
  let errorMessage = ''

  rules.forEach(rule => {
    const {type, value} = rule
    if (type === ValidateRuleType.Email) {
      if (value.length === 0) {
        errorMessage = 'Email can not be empty'
        return
      }
    }
  })

  return errorMessage
}
