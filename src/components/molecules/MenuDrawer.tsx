import { memo, VFC } from 'react'
import { Button } from '@chakra-ui/button'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal'

type Props = {
  isOpen: boolean
  // 引数なし、返り値なし
  onClickHome: () => void
  onClickSetting: () => void
  onClickUserManagement: () => void
  onClose: () => void
}

const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUserManagement,
    onClose,
  } = props

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickUserManagement}>
              ユーザー一覧
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})

export default MenuDrawer
