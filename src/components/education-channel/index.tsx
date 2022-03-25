import type { IconComponent } from 'utils/typings/types'

import Link from 'next/link'
import { Flex, Text } from '@vtex/brand-ui'

import ArrowRightIcon from 'public/icons/arrow-right-icon'

import styles from './styles'

export interface props {
  title: string
  description: string
  textLink: string
  link: string
  Icon: IconComponent
}

const EducationChannel = ({
  title,
  description,
  textLink,
  link,
  Icon,
}: props) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <Flex sx={styles.channelBox}>
          <Icon className="channelIcon" sx={styles.channelIcon} />
          <Text className="channelTitle" sx={styles.channelTitle}>
            {title}
          </Text>
          <Text className="channelDescription" sx={styles.channelDescription}>
            {description}
          </Text>
          <Flex>
            <Text className="channelLinkText" sx={styles.channelLinkText}>
              {textLink}
            </Text>
            <ArrowRightIcon
              className="channelArrow"
              sx={styles.channelArrowIcon}
            />
          </Flex>
        </Flex>
      </a>
    </Link>
  )
}

export default EducationChannel
