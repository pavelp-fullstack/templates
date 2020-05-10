import { build } from './tasks/build'
import { deploy } from './tasks/deploy'
import { watch } from './tasks/watch'
import { dev } from './tasks/dev'

exports.build = build
exports.deploy = deploy
exports.watch = watch
exports.default = dev
