import { useState, memo, VFC, useEffect, ChangeEvent } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'

import { User } from '../../../types/api/user'
import PrimaryButton from '../../atoms/button/PrimaryButton'

type Props = {
  isAdmin?: boolean
  isOpen: boolean
  onClose: () => void
  user: User | null
}

const UserDetailModal: VFC<Props> = memo((props) => {
  const { isAdmin = false, isOpen, onClose, user } = props
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const onClickUpdate = () => {
    alert('update')
  }

  return (
    <Modal
      autoFocus={false}
      isOpen={isOpen}
      motionPreset="none"
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onChangeUsername}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
})

export default UserDetailModal
