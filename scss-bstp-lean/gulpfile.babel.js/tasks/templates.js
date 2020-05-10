import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'

import errorHandler from '../util/errorHandler'
import beautify from 'gulp-jsbeautifier'

import { paths } from '../config'

export function templates() {
  return src(paths.templates.src)
    .pipe(plumber({ errorHandler }))
    .pipe(
      beautify({
        indent_size: 2
      })
    )
    .pipe(dest(paths.templates.dest))
}
