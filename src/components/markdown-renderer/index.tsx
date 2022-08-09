import { MDXRemote } from 'next-mdx-remote'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MDXRemote2: any = MDXRemote

import components from './components'

interface Props {
  serialized: string
}

const MarkdownRenderer = ({ serialized }: Props) => (
  <MDXRemote2 components={components} lazy {...serialized} />
)

export default MarkdownRenderer
