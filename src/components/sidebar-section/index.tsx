import { Flex, Box, Text } from '@vtex/brand-ui'
import { useContext, useState } from 'react'

import HelpIcon from 'components/icons/help-icon'
import SearchIcon from 'components/icons/search-icon'
import SideBarToggleIcon from 'components/icons/sidebar-toggle-icon'
import SideBarElements from 'components/sidebar-elements'

import { SidebarContext } from 'utils/contexts/sidebar'
import type { SidebarItemPropTypes } from 'components/sidebar-elements'
import type { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import styles from './styles'

export interface SidebarSectionProps {
  title: DocumentationTitle | UpdatesTitle
  data: SidebarItemPropTypes[]
}

const SidebarSection = ({ title, data }: SidebarSectionProps) => {
  const [searchValue, setSearchValue] = useState('')
  const { sidebarSectionHidden, setSidebarSectionHidden } =
    useContext(SidebarContext)

  return (
    <Box
      className={sidebarSectionHidden ? 'active' : ''}
      sx={styles.sidebarElementsContainer}
    >
      <Box
        className={sidebarSectionHidden ? 'sidebarHide' : ''}
        sx={styles.sidebarElementsBox}
      >
        <Text sx={styles.sidebarTitle}>
          {title}
          <HelpIcon sx={styles.sidebarHelpIcon} />
        </Text>
        <Flex sx={styles.searchBox}>
          <SearchIcon sx={styles.searchIcon} />
          <input
            style={styles.searchInput}
            className="searchComponent"
            type="text"
            placeholder="Filter in Title..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
        </Flex>
        <SideBarElements items={data} subItemLevel={0} />
      </Box>
      <Flex
        className="toggleIcon"
        sx={
          sidebarSectionHidden
            ? styles.toggleIconBoxActive
            : styles.toggleIconBox
        }
      >
        <SideBarToggleIcon
          onClick={() => {
            setSidebarSectionHidden(
              (sidebarSectionHidden) => !sidebarSectionHidden
            )
          }}
          sx={sidebarSectionHidden ? styles.toggleIcon : {}}
        />
      </Flex>
    </Box>
  )
}

export default SidebarSection
