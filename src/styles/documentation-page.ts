import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  pt: '5rem',
  width: '100%',
  backgroundColor: 'white',
}

const mainContainer: SxStyleProp = {
  justifyContent: 'center',
  width: '100%',
  pt: '64px',
}

const articleBox: SxStyleProp = {
  width: ['100%', 'initial'],
}

const contentContainer: SxStyleProp = {
  width: ['322px', '544px', '544px', '544px', '544px', '720px'],
  margin: ['auto', 'initial'],
}

const rightContainer: SxStyleProp = {
  ml: '64px',
  minWidth: 'auto',
  display: [
    'none !important',
    'none !important',
    'none !important',
    'none !important',
    'initial !important',
  ],
}

export default {
  container,
  mainContainer,
  articleBox,
  contentContainer,
  rightContainer,
}
