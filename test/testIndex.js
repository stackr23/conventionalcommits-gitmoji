import config   from '../dist/index.js'
import logger   from '../utils/stackr23-logger/index.js'
import {config as __config} from '../dist/index.js'

import _config  from '../dist/config.js'

// TBD: add @stackr23/logger
logger.debug("import gccConfig from '@stackr23/gitmoji-conventional-commits'\n")
logger.debug("(beta version just exports the config)")
console.log(config)
logger.debug("import config from '@stackr23/gitmoji-conventional-commits/src/config.js'\n")
console.log(_config)
console.log("import {config } from '@stackr23/gitmoji-conventional-commits'}\n")
console.log(__config)
logger.success('test done')