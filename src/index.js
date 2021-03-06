//    _______ __  __  ___        _ _    ____________
//   / ____(_) /_/  |/  /___    (_|_)  / ____/ ____/
//  / / __/ / __/ /|_/ / __ \  / / /  / /   / /
// / /_/ / / /_/ /  / / /_/ / / / /  / /___/ /___
// \____/_/\__/_/  /_/\____/_/ /_/   \____/\____/
//                        /___/
//
// (c) by Stefan Friedl - GNU LGPLv3
// https://github.com/stackr23/gitmoji-conventional-commits

import _extendGitmoji       from './extendGitmoji'
export const extendGitmoji  = _extendGitmoji

import * as transformFunctions from './transformCommitMsg.js'
export default transformFunctions
