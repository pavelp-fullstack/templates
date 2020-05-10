import { series, parallel } from 'gulp'

import { clean } from './clean'
import { styles } from './styles'
import { scripts } from './scripts'
import { templates } from './templates'
import { assets } from './assets'
import { copy } from './copy'

import { paths } from '../config'

export const build = series(
  clean,
  parallel(styles, scripts, templates, assets, copy)
)
