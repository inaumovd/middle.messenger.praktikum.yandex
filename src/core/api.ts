const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}

function queryStringify(data: any) {
  let queryStr = '?'
  const dataArr = Object.entries(data)
  dataArr.forEach((item, el) => {
    console.log(el < dataArr.length - 1)
    let amper = el < dataArr.length - 1 ? '&' : ''
    const str = `${item[0]}=${item[1]}${amper}`
    queryStr = queryStr + str
  })

  return queryStr
}

export class HTTPTransport {
  get = (url: string, options: { data?: any; timeout?: number } = {}) => {
    let innerUrl = url
    if (options.data) {
      innerUrl = url + queryStringify(options.data)
    }

    return this.request(
      innerUrl,
      { ...options, method: METHODS.GET },
      options.timeout,
    )
  }

  put = (
    url: string,
    options: { data?: any; timeout?: number; type?: string } = {},
  ) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    )
  }

  post = (url: string, options: { data?: any; timeout?: number } = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    )
  }

  delete = (url: string, options: { data?: any; timeout?: number } = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    )
  }

  request(url: string, options: any, timeout: number = 5000) {
    const { headers, data, method, type } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      if (headers) {
        const headersArr = Object.entries(headers)
        console.log(headersArr)
        headersArr.forEach((item) => {
          xhr.setRequestHeader(item[0], item[1])
        })
      }

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject
      xhr.withCredentials = true

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        type === 'file' ? xhr.send(data) : xhr.send(JSON.stringify(data))
      }
    })
  }
}
