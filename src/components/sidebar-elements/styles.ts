import { SxStyleProp } from '@vtex/brand-ui'

const elementContainer: SxStyleProp = {
  background: '#FFFFFF',
  cursor: 'pointer',
  ':hover': {
    background: '#F8F7FC',
    a: {
      color: '#142032',
    },
  },
}

const elementText: SxStyleProp = {
  color: 'muted.0',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  textAlign: 'initial',
  paddingBlock: '7px',
  display: 'flex',
  alignItems: 'center',
}

const elementActive: SxStyleProp = {
  ...elementText,
  color: '#D71D55 !important',
}

const arrowIcon: SxStyleProp = {
  padding: '0',
  color: 'muted.1',
}

const arrowIconActive: SxStyleProp = {
  ...arrowIcon,
  color: '#D71D55',
}

const elementButton: SxStyleProp = {
  textTransform: 'initial',
  fontVariationSettings: 'unset',
  padding: '0',
  margin: '0',
  textDecoration: 'none !important',
}

const sectionDivider: SxStyleProp = {
  hr: {
    border: '1px solid #E7E9EE',
    borderTop: 'none',
  },
}

export default {
  elementContainer,
  elementText,
  elementActive,
  arrowIcon,
  arrowIconActive,
  elementButton,
  sectionDivider,
}
