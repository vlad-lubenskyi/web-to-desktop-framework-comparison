import { app, BrowserWindow } from '@mobrowser/api';

const win = new BrowserWindow({
  size: { width: 800, height: 600 },
  url: app.url,
  windowTitleVisible: false,
  windowTitlebarVisible: false,
})
win.setWindowButtonVisible('close', false)
win.setWindowButtonVisible('minimize', false)
win.setWindowButtonVisible('zoom', false)
win.show()

console.log('App started and loaded !')
