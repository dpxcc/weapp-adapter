import { noop } from './util/index.js'

if (URL && typeof URL.revokeObjectURL !== 'function') {
    URL.revokeObjectURL = noop
}
