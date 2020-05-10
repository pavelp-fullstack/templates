import { src, dest } from 'gulp'
import changed from 'gulp-changed'

import { paths } from '../config'

export function copy() {
  return src(paths.copy.src)
    .pipe(changed(paths.copy.dest))
    .pipe(dest(paths.copy.dest))
}
