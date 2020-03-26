import { cwd, libRootDir } from './fileUtils'
import { joinPath } from './pathUtils'

export const TEST_CWD = '/current/working/dir'
export const TEST_LIB_ROOT_DIR = '/npm/global/module/dir'

export function overrideProcessValue(key, value) {
  // process.platform is read-only, use this workaround to set it
  Object.defineProperty(process, key, { value })
}

export function createNetPath(config, ...relativePaths) {
  return joinPath(cwd(), 'network', config.network.name, ...relativePaths)
}

export function createLibPath(...relativePaths) {
  return joinPath(libRootDir(), ...relativePaths)
}
