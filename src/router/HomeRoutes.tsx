import Home from '../componente/pages/Home'
import Page404 from '../componente/pages/Page404'
import Setting from '../componente/pages/Setting'
import UserManagement from '../componente/pages/UserManagement'

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
]
