import { Flex, Box } from '@vtex/brand-ui'
import type { ReactElement } from 'react'

import { ThemeProvider } from '@vtex/brand-ui'

import styles from 'styles/documentation-page'
import Header from 'components/header'
import Footer from 'components/footer'

import SidebarContextProvider from 'utils/contexts/sidebar'
import Sidebar from 'components/sidebar'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'

interface Props {
  sidebarfallback: any //eslint-disable-line
  children: ReactElement
  hideSidebar?: boolean
  sectionSelected?: DocumentationTitle | UpdatesTitle | ''
}

export default function Layout({
  children,
  sidebarfallback,
  hideSidebar,
  sectionSelected,
}: Props) {
  return (
    <ThemeProvider>
      <Header />
      <Flex sx={styles.container}>
        <SidebarContextProvider fallback={sidebarfallback}>
          {!hideSidebar && <Sidebar sectionSelected={sectionSelected} />}
          <Box sx={styles.mainContainer}>{children}</Box>
        </SidebarContextProvider>
      </Flex>
      <Footer />
    </ThemeProvider>
  )
}
