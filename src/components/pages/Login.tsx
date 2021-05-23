import { ChangeEvent, useState, memo, VFC } from 'react'
import { Input } from '@chakra-ui/input'
import { Box, Divider, Flex, Heading } from '@chakra-ui/layout'
import { Stack } from '@chakra-ui/layout'
import PrimaryButton from '../atoms/button/PrimaryButton'

import { useAuth } from '../../hooks/useAuth'

const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('')
  const { login, loading } = useAuth()

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const onClickLogin = () => login(userId)

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        {/* stackは囲った中の要素を等間隔で配置することができる */}
        <Stack spacing={6} px={4} py={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
})

export default Login
