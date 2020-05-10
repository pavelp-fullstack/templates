import browserSync from 'browser-sync'

import { paths } from '../config'

export function serve(cb) {
  browserSync.init({
    server: {
      baseDir: [paths.dest]
    },
    notify: false
  })
  cb()
}

export function reload(cb) {
  browserSync.reload()
  cb()
}
