import { memo, VFC } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'

import { User } from '../../../types/api/user'

type Props = {
  isOpen: boolean
  onClose: () => void
  user: User | null
}

const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, user } = props

  return (
    <Modal
      autoFocus={false}
      isOpen={isOpen}
      motionPreset="none"
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={user?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})

export default UserDetailModal
