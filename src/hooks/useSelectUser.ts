import { useCallback, useState } from 'react'
import { User } from '../types/api/user'

type Props = {
  id: number
  onOpen: () => void
  users: Array<User>
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback((props: Props) => {
    const { id, onOpen, users } = props
    const targetUser = users.find((user) => user.id === id)
    // ?? => 左辺の値がnull or undefinedなら右辺を実行する
    setSelectedUser(targetUser ?? null)
    // 別解: setSelectedUser(targetUser!) typeScriptの書き方
    // 明示的に必ず存在することを示すが、慎重に使用した方が良さそう
    onOpen()
  }, [])

  return { onSelectUser, selectedUser }
}
