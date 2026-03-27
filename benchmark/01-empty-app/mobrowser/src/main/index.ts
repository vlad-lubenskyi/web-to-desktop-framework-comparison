import { app, BrowserWindow } from '@mobrowser/api';

const win = new BrowserWindow({
  size: { width: 800, height: 600 },
  url: app.url,
})
win.show()

console.log('App started and loaded !')
