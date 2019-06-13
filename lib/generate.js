const fs = require('fs')
const https = require('https')
const path = require('path')

https.get('https://unicode.org/Public/emoji/12.0/emoji-data.txt', (res) => {
  const { statusCode } = res
  const contentType = res.headers['content-type']

  let error
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
      `Status Code: ${statusCode}`)
  } else if (!/^text\/plain/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
      `Expected text/plain but received ${contentType}`)
  }
  if (error) {
    console.error(error.message)
    // Consume response data to free up memory
    res.resume()
    return
  }

  res.setEncoding('utf8')
  let rawData = ''
  res.on('data', (chunk) => { rawData += chunk })
  res.on('end', () => {
    try {
      const lines = rawData.split('\n').filter(line =>
        line.length > 0 && line.startsWith('#') === false
      )
      const ranges = lines.map(line => 'U+' + line.split(';')[0].trim().replace('..', '-'))

      const cssFragment = 'unicode-range: ' + ranges.join(',') + ';\n'

      fs.writeFileSync(path.join(__dirname, '..', 'css-fragment.txt'), cssFragment)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`)
})
