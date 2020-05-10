import { src, dest } from 'gulp'
// import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import changed from 'gulp-changed'
import errorHandler from '../util/errorHandler'

import { paths } from '../config'

export function assets() {
  return src(paths.assets.src)
    .pipe(plumber({ errorHandler }))
    .pipe(changed(paths.assets.dest))
    .pipe(dest(paths.assets.dest))
}
