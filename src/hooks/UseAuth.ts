import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { User } from '../types/api/user'
import { useMessage } from './useMessage'
import { useLoginUser } from '../hooks/useLoginUser'

export const useAuth = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const { showMessage } = useMessage()
  const { setLoginUser } = useLoginUser()

  // [MEMO]finallyなど、最後に実行する処理を入れているのに、thenのところでhistory.pushでページを離脱している
  // その後にfinallyで、stateを更新しようとしているのでwarningが出ている
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data)
            showMessage({ title: 'ログインしました', status: 'success' })
            history.push('/home')
          } else {
            showMessage({ title: 'ユーザーが見つかりません', status: 'error' })
            setLoading(false)
          }
        })
        .catch(() => {
          showMessage({ title: 'ログインできません', status: 'error' })
          setLoading(false)
        })
      // .finally(() => setLoading(false))
    },
    [history, showMessage, setLoginUser]
  )
  return { login, loading }
}
