import { memo, VFC } from 'react'
import { Button, IconButton } from '@chakra-ui/button'
import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'

const Header: VFC = memo(() => {
  // ChakraUIが提供するhooks
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        align="center"
        as="nav"
        bg="teal.500"
        color="gray.50"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/* レスポンシブは基本的にモバイルファースト(=baseの指定はモバイル) */}
        {/* Headingでh1, h2等に対応 */}
        {/* asでどのタグで実装するか指定できる */}
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            {/* fontSizeのところresponsive ブレイクポイントで切り替わる */}
            ユーザー管理アプリ
          </Heading>
        </Flex>
        {/* Flexはdisplay: flex; or divダグみたいなもの？ */}
        <Flex
          align="center"
          display={{ base: 'none', md: 'flex' }}
          flexGrow={2}
          fontSize="sm"
        >
          {/* Boxはdivタグのようなもの */}
          <Box pr={4}>
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          display={{ base: 'block', md: 'none' }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          size="sm"
          variant="unstyled"
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%">TOP</Button>
              <Button w="100%">ユーザー一覧</Button>
              <Button w="100%">設定</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
})

export default Header
