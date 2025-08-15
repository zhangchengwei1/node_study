// import fs from 'node:fs'
// import data from './data.json' assert { type: json }
// import Module, { wrap } from 'node:module'

// Module._extensions['.json'] = (module, filename) => {
//   const content = fs.readFileSync(filename, 'utf-8')
//   module.exports = JSON.parse(content)
// }

// if (StringPrototypeEndsWith(filename, '.js')) {
//   module.exports = JSON.parse(content)
// }

// wrap(content)



// process.on('uncaughtException', (err) => {
//   console.log('uncaughtException', err)
// })
import child_process from 'node:child_process'
child_process.fork('./child.js')
