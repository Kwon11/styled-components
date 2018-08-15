// @flow
import StyleSheet from '../models/StyleSheet'

type RemoveGlobalFn = (input: string) => void

export default () => {
  const removeGlobal: RemoveGlobalFn = (...args) => {
    const styleSheet = StyleSheet.master
    const id = args[0]
    styleSheet.remove(id, true)
  }

  return removeGlobal
}
