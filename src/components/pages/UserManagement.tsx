import { useCallback, useEffect, memo, VFC } from 'react'
import { Center, Wrap, WrapItem } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { useDisclosure } from '@chakra-ui/hooks'

import UserCard from '../organisms/user/UserCard'
import UserDetailModal from '../organisms/user/UserDetailModal'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useSelectUser } from '../../hooks/useSelectUser'

const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, loading, users } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()

  useEffect(() => {
    getUsers()
  }, [])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, onOpen, users })
    },
    [users, onSelectUser, onOpen]
  )

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
                id={user.id}
                imageUrl={'https://source.unsplash.com/random'}
                userName={user.username}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  )
})

export default UserManagement
