import { backgrounds, classnames, flex, height } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  height('h-screen'),
  flex('flex-1'),
  backgrounds('bg-black-300')
)

export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
