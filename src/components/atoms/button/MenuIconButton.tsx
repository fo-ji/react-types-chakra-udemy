import { memo, VFC } from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  onOpen: () => void
}

const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props

  return (
    <IconButton
      aria-label="メニューボタン"
      display={{ base: 'block', md: 'none' }}
      icon={<HamburgerIcon />}
      onClick={onOpen}
      size="sm"
      variant="unstyled"
    />
  )
})

export default MenuIconButton
