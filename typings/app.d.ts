const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
}

function queryStringify(data) {
  let queryStr = '?'
  const dataArr = Object.entries(data)
  dataArr.forEach((item, el) => {
    let ampersand = el < dataArr.length - 1 ? '&' : ''
    const str = `${item[0]}=${item[1]}${ampersand}`
    queryStr = queryStr + str
  })

  return queryStr
}

export class HTTPTransport {
  get = (url, options = {}) => {
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

  put = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    )
  }

  post = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    )
  }

  delete = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    )
  }

  request(url, options) {
    const { headers, data, method } = options

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)

      if (headers) {
        const headersArr = Object.entries(headers)
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

      if (method === METHODS.GET || !data) {
        xhr.send()
      } else {
        xhr.send(data)
      }
    })
  }
}
