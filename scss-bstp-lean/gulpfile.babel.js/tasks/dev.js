import { series } from 'gulp'

import { build } from './build'
import { watch } from './watch'

export const dev = series(build, watch)
