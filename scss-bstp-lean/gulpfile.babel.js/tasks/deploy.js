import { src } from 'gulp'
import ghPages from 'gulp-gh-pages'

import { paths } from '../config'

export function deploy() {
  return src(paths.deploy).pipe(ghPages())
}
