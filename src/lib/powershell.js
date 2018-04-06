const Shell = require('node-powershell')
const options = {
  debugMsg: false
}

const openPreferences = pane => {
  const cmd = `Get-ControlPanelItem *${pane.replace(/[^\w]/g, '')}* | Show-ControlPanelItem`
  const ps = new Shell(options)
  ps.addCommand(cmd)
  ps.invoke()
}

const run = (cmd) => {
  const ps = new Shell(options)
  ps.addCommand(cmd)
  ps.invoke()
}

module.exports = { run, openPreferences }
