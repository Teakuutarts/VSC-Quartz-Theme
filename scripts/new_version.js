const { execSync } = require('child_process')
const { version } = require('../package.json')
const cmd = [
  `vsce package`,
  `git add .`,
  `git commit -m ${version}`,
  `git push --follow-tags`
]

cmd.map(
  command => execSync(command, { stdio: 'inherit' })
)
