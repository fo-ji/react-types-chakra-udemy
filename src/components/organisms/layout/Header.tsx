import { useCallback, memo, VFC } from 'react'
import { Box, Flex, Heading, Link } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import { useHistory } from 'react-router-dom'

import MenuIconButton from '../../atoms/button/MenuIconButton'
import MenuDrawer from '../../molecules/MenuDrawer'

const Header: VFC = memo(() => {
  // ChakraUIが提供するhooks
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()

  // useCallbackの依存配列は中で使用している変数を指定していないと、eslintでは怒られるが、必要なければ無視
  const onClickHome = useCallback(() => {
    history.push('/home')
  }, [])

  const onClickUserManagement = useCallback(() => {
    history.push('/home/user_management')
  }, [])

  const onClickSetting = useCallback(() => {
    history.push('/home/setting')
  }, [])

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
        <Flex
          _hover={{ cursor: 'pointer' }}
          align="center"
          as="a"
          mr={8}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
        onClose={onClose}
      />
    </>
  )
})

export default Header
