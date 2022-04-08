import { SxStyleProp } from '@vtex/brand-ui'

const init: SxStyleProp = {
  width: 'auto',
}

const sidebarIcons: SxStyleProp = {
  display: ['none', 'none', 'none', 'flex'],
  width: '56px',
  height: '692px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRight: '1px solid #E7E9EE',
  paddingBottom: '32px',
}

const sidebarIconsContainer: SxStyleProp = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
}

const iconBox: SxStyleProp = {
  mt: ['32px'],
  width: '40px',
  height: '40px',
  borderRadius: '4px',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
}

const iconBoxActive: SxStyleProp = {
  ...iconBox,
  background: '#F8F7FC',
}

const icon: SxStyleProp = {
  width: ['24px'],
  height: ['24px'],
}

const iconActive: SxStyleProp = {
  ...icon,
  '> path': {
    stroke: '#E31C58',
  },
}

export default {
  init,
  sidebarIcons,
  sidebarIconsContainer,
  iconBox,
  icon,
  iconActive,
  iconBoxActive,
}
