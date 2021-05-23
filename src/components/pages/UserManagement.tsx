import { useEffect, memo, VFC } from 'react'
import { Center, Wrap, WrapItem } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'

import UserCard from '../organisms/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'

const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                fullName={user.name}
                imageUrl={'https://source.unsplash.com/random'}
                userName={user.username}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  )
})

export default UserManagement
