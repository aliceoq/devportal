import { SxStyleProp } from '@vtex/brand-ui'

const multiselect: SxStyleProp = {
  position: 'relative',
  margin: '20px 0px',

  '.hidden': {
    visibility: 'hidden',
  },

  '.selectionText': {
    color: '#000000',
  },
}

const input: SxStyleProp = {
  padding: '8px 12px 7px',
  background: '#F4F4F4',
  borderRadius: '4px',
  justifyContent: 'space-between',
  width: '230px',
  cursor: 'pointer',
}

const dropdown: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 16px',
  background: '#FFFFFF',
  border: '1px solid #DDDDDD',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  position: 'absolute',
  width: 'max-content',
  top: 'calc(100% + 2px)',
  zIndex: '3',
}

const optionsContainer: SxStyleProp = {
  flexDirection: 'column',
}

const checkbox: SxStyleProp = {
  ':hover': {
    borderRadius: '4px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  },
}

const option: SxStyleProp = {
  columnGap: '8px',
  padding: '8px 0px',
}

const buttonsContainer: SxStyleProp = {
  marginTop: '10px',
}

export default {
  multiselect,
  input,
  dropdown,
  optionsContainer,
  checkbox,
  option,
  buttonsContainer,
}
