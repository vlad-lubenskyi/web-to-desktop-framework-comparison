import { app } from '@mobrowser/api';

const win = app.createWindow()
win.browser.loadUrl(app.url)
win.setSize({ width: 800, height: 600 })
win.setWindowTitlebarVisible(false)
win.show()

console.log('App started and loaded !')
