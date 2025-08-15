import { exec, execSync } from 'node:child_process'
const nodeVersion = process.version
const childVersion = execSync('node -v')
console.log('nodeVersion', nodeVersion)
console.log('childVersion', childVersion.toString())
