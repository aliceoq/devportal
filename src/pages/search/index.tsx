import { useRouter } from 'next/router'
import { Flex, Box, Text } from '@vtex/brand-ui'
import styles from 'styles/search-page'

import APIGuidesIcon from 'components/icons/api-guides-icon'
import APIReferenceIcon from 'components/icons/api-reference-icon'
import VTEXIOIcon from 'components/icons/vtex-io-icon'
import FastStoreIcon from 'components/icons/fast-store-icon'
import WebOpsIcon from 'components/icons/webops-icon'
import ReleaseNotesIcon from 'components/icons/release-notes-icon'
import DocumentationUpdatesIcon from 'components/icons/documentation-updates-icon'
import Sidebar from 'components/sidebar'
import SearchCard from 'components/search-card'
import { MethodType } from 'utils/typings/unionTypes'
import { ActionType } from 'components/last-updates-card/functions'

export interface SearchDataItemProps {
  doc: string
  title: string
  description: string
  filters?: string[]
  http?: MethodType
  actionType?: ActionType
}

const docsIcons = [
  {
    Icon: APIGuidesIcon,
    title: 'API Guides',
  },
  {
    Icon: APIReferenceIcon,
    title: 'API Reference',
  },
  {
    Icon: VTEXIOIcon,
    title: 'VTEX IO',
  },
  {
    Icon: FastStoreIcon,
    title: 'FastStore',
  },
  {
    Icon: WebOpsIcon,
    title: 'WebOps',
  },
]

const notesIcons = [
  {
    Icon: ReleaseNotesIcon,
    title: 'Release Notes',
  },
  {
    Icon: DocumentationUpdatesIcon,
    title: 'Documentation Updates',
  },
]

const getIcon = (doc: string) => {
  return (
    docsIcons.find((icon) => icon.title === doc)?.Icon ||
    notesIcons.find((icon) => icon.title === doc)?.Icon
  )
}

const SearchPage = () => {
  const router = useRouter()
  const searchData: SearchDataItemProps[] = [
    {
      doc: 'API Guides',
      title: 'SKU Selector',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      filters: ['label', 'label', 'label'],
    },
    {
      doc: 'API Reference',
      title: 'GET SKU seller',
      http: 'POST',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      filters: ['label', 'label', 'label'],
    },
    {
      doc: 'Release Notes',
      title: 'SKU Selector',
      description:
        'The SKU Selector is a product details page block responsible for displaying every SKU available for a given product.',
      actionType: 'removed',
    },
  ]
  return (
    <Flex sx={styles.body}>
      <Sidebar />
      <Box sx={styles.resultContainer}>
        <Text sx={styles.resultText}>
          Showing {searchData.length} results for "{router.query.keyword}" in
          all results
        </Text>
        <hr />
        <Box>
          {searchData.map((result, index) => (
            <SearchCard
              key={`${result.doc}${result.title}${index}`}
              Icon={getIcon(result.doc)!}
              {...result}
            />
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default SearchPage
